
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Childcare Matching Platform</h1>
      <p className="mb-8 text-gray-700">믿을 수 있는 시터와 부모를 쉽게 연결해보세요.</p>
      <div className="space-x-4">
        <Link href="/parent">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">👶 돌봄 신청</button>
        </Link>
        <Link href="/sitter">
          <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">🧑‍🏫 시터 등록</button>
        </Link>
      </div>
    </div>
  );
}
