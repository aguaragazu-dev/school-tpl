import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Limpieza previa de la base de datos
  await prisma.$transaction([
    prisma.userProfile.deleteMany(),
    prisma.user.deleteMany(),
    prisma.institute.deleteMany(),
    prisma.subject.deleteMany(),
    prisma.news.deleteMany(),
    prisma.event.deleteMany(),
    // ... otros modelos
  ]);

  // Crear Institutos
  const institutes = await prisma.$transaction([
    prisma.institute.create({
      data: {
        name: 'Primary School Institute',
        description: 'Primary education institute',
        level: 'PRIMARY',
        address: '123 Primary St.',
        phone: '123-456-7890',
        email: 'primary@school.edu'
      }
    }),
    prisma.institute.create({
      data: {
        name: 'Secondary School Institute',
        description: 'Secondary education institute',
        level: 'SECONDARY',
        address: '456 Secondary Ave.',
        phone: '098-765-4321',
        email: 'secondary@school.edu'
      }
    })
  ]);

  // Create demo users
  const admin = await prisma.user.create({
    data: {
      email: 'admin@school.edu',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
      profile: {
        create: {
          firstName: 'Admin',
          lastName: 'User',
          dateOfBirth: new Date('1980-01-01'),
          gender: 'OTHER',
          phoneNumber: '111-222-3333',
          address: 'Admin Street 123'
        }
      }
    },
  });

  const teachers = await Promise.all([
    prisma.user.create({
      data: {
        email: 'teacher.primary@school.edu',
        password: hashedPassword,
        role: 'TEACHER',
        instituteId: institutes[0].id, // PRIMARY
        profile: {
          create: {
            firstName: 'John',
            lastName: 'Doe',
            dateOfBirth: new Date('1985-03-15'),
            gender: 'MALE',
            phoneNumber: '444-555-6666',
            address: 'Teacher St. 123'
          }
        }
      }
    }),
    prisma.user.create({
      data: {
        email: 'teacher.secondary@school.edu',
        password: hashedPassword,
        role: 'TEACHER',
        instituteId: institutes[1].id, // SECONDARY
        profile: {
          create: {
            firstName: 'Jane',
            lastName: 'Smith',
            dateOfBirth: new Date('1982-07-22'),
            gender: 'FEMALE',
            phoneNumber: '777-888-9999',
            address: 'Teacher Ave. 456'
          }
        }
      }
    })
  ]);

  // Crear Materias
  const subjects = await prisma.$transaction([
    prisma.subject.create({
      data: {
        name: 'Mathematics',
        description: 'Basic and advanced mathematics',
        teacherId: teachers[0].id
      }
    }),
    prisma.subject.create({
      data: {
        name: 'Science',
        description: 'Natural and physical sciences',
        teacherId: teachers[1].id
      }
    }),
    prisma.subject.create({
      data: {
        name: 'History',
        description: 'World and local history',
        teacherId: teachers[0].id
      }
    })
  ]);

  // Crear Padres
  const parentPassword = await hash('parent123', 10);
  const parents = await Promise.all([
    prisma.user.create({
      data: {
        email: 'parent1@email.com',
        password: parentPassword,
        role: 'PARENT',
        profile: {
          create: {
            firstName: 'Parent',
            lastName: 'One',
            dateOfBirth: new Date('1975-05-10'),
            gender: 'MALE',
            phoneNumber: '123-123-1234',
            address: 'Parent Street 789'
          }
        }
      }
    }),
    prisma.user.create({
      data: {
        email: 'parent2@email.com',
        password: parentPassword,
        role: 'PARENT',
        profile: {
          create: {
            firstName: 'Parent',
            lastName: 'Two',
            dateOfBirth: new Date('1978-08-15'),
            gender: 'FEMALE',
            phoneNumber: '321-321-4321',
            address: 'Parent Avenue 012'
          }
        }
      }
    })
  ]);

  // Crear Estudiantes
  const studentPassword = await hash('student123', 10);
  const students = await Promise.all(
    Array(5).fill(null).map((_, index) => 
      prisma.user.create({
        data: {
          email: `student${index + 1}@school.edu`,
          password: studentPassword,
          role: 'STUDENT',
          instituteId: index < 3 ? institutes[0].id : institutes[1].id, // Distribuir entre PRIMARY y SECONDARY
          parentId: index < 3 ? parents[0].id : parents[1].id, // Distribuir entre los padres
          profile: {
            create: {
              firstName: `Student`,
              lastName: `Number ${index + 1}`,
              dateOfBirth: new Date(2010 - index, 0, 1),
              gender: index % 2 === 0 ? 'MALE' : 'FEMALE',
              phoneNumber: `555-${index}${index}${index}-${index}${index}${index}${index}`,
              address: `Student Street ${index + 1}`,
              enrollmentDate: new Date(2023, 8, 1)
            }
          }
        }
      })
    )
  );

  // Crear Noticias
  const news = await Promise.all(
    Array(5).fill(null).map((_, index) => 
      prisma.news.create({
        data: {
          title: `School News ${index + 1}`,
          content: `This is the content for news ${index + 1}. Lorem ipsum dolor sit amet...`,
          authorId: admin.id,
          published: true,
          publishDate: new Date(2023, 10, index + 1)
        }
      })
    )
  );

  // Crear Eventos
  const events = await prisma.$transaction([
    prisma.event.create({
      data: {
        title: 'School Sports Day',
        description: 'Annual sports day event with various competitions',
        startDate: new Date(2023, 11, 15, 9, 0),
        endDate: new Date(2023, 11, 15, 17, 0),
        location: 'School Sports Ground',
        organizer: admin.id,
        type: 'SPORTS'
      }
    }),
    prisma.event.create({
      data: {
        title: 'Science Fair 2023',
        description: 'Annual science fair showcasing student projects',
        startDate: new Date(2023, 11, 20, 10, 0),
        endDate: new Date(2023, 11, 20, 16, 0),
        location: 'School Auditorium',
        organizer: teachers[1].id,
        type: 'ACADEMIC'
      }
    })
  ]);

  // Asignar estudiantes a materias
  await Promise.all(
    students.map(student =>
      Promise.all(
        subjects.map(subject =>
          prisma.studentSubject.create({
            data: {
              studentId: student.id,
              subjectId: subject.id
            }
          })
        )
      )
    )
  );

  console.log('Seed completed successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });