
import { useState } from 'react';

export default function Parent() {
  const [form, setForm] = useState({
    parentName: '', childAge: '', location: '', startTime: '', hours: ''
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const hours = parseFloat(form.hours);
    if (!hours || hours <= 0) {
      alert("올바른 시간을 입력해주세요.");
      return;
    }
    const amount = hours * 25 * 100; // Stripe는 센트 단위
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    });
    const session = await res.json();
    window.location.href = session.url;
  };

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
      <input type="number" name="hours" placeholder="몇 시간 돌봄 (숫자 입력)" onChange={handleChange} className="border p-2 rounded w-full mb-4" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded w-full">결제하고 신청하기</button>
    </div>
  );
}
