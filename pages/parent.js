
import { useState } from 'react';

export default function Parent() {
  const [form, setForm] = useState({
    parentName: '', childAge: '', location: '', startTime: '', endTime: '', needs: ''
  });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-white p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">👶 부모 돌봄 신청서</h2>
      <input name="parentName" placeholder="부모 이름" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <input name="childAge" placeholder="아이 나이" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <select name="location" onChange={handleChange} className="border p-2 rounded w-full mb-2">
        <option value="">지역 선택</option>
        <option value="Vancouver">Vancouver</option>
        <option value="Burnaby">Burnaby</option>
        <option value="Coquitlam">Coquitlam</option>
      </select>
      <input type="datetime-local" name="startTime" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <input type="datetime-local" name="endTime" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <textarea name="needs" placeholder="요청사항" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">신청하기</button>
    </div>
  );
}
