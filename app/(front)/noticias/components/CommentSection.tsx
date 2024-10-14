import Image from 'next/image';

interface Comment {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  content: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

export default function CommentSection({ comments }: CommentSectionProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments ({comments.length})</h2>
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <Image
              src={comment.author.avatar}
              alt={comment.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{comment.author.name}</h3>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
              <button className="mt-2 text-green-500 hover:text-green-600 transition duration-300">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
      <form className="mt-8">
        <h3 className="text-xl font-bold mb-4">Leave a message here</h3>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={4}
          placeholder="Enter your comment"
        ></textarea>
        <button
          type="submit"
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}
