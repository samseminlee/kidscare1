
import { useState } from 'react';

export default function Sitter() {
  const [form, setForm] = useState({
    sitterName: '', experience: '', languages: '', availableFrom: '', availableTo: '', location: '', photoUrl: ''
  });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-white p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-green-600 mb-4">🧑‍🏫 시터 등록 신청서</h2>
      <input name="sitterName" placeholder="이름" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <textarea name="experience" placeholder="경력" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <input name="languages" placeholder="가능 언어" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <input type="datetime-local" name="availableFrom" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <input type="datetime-local" name="availableTo" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <select name="location" onChange={handleChange} className="border p-2 rounded w-full mb-2">
        <option value="">지역 선택</option>
        <option value="Vancouver">Vancouver</option>
        <option value="Burnaby">Burnaby</option>
        <option value="Coquitlam">Coquitlam</option>
      </select>
      <input name="photoUrl" placeholder="사진 URL" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
      <button className="bg-green-500 text-white py-2 px-4 rounded w-full">등록하기</button>
    </div>
  );
}
