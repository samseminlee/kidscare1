
import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState('ko');
  const translations = {
    ko: { title: "Childcare 매칭 플랫폼", parentFormTitle: "👶 부모 신청서", sitterFormTitle: "🧑‍🏫 시터 등록", submit: "신청하기", register: "등록하기", location: "지역 선택" },
    en: { title: "Childcare Matching Platform", parentFormTitle: "👶 Parent Application", sitterFormTitle: "🧑‍🏫 Sitter Registration", submit: "Submit", register: "Register", location: "Select Location" },
    zh: { title: "儿童看护匹配平台", parentFormTitle: "👶 家长申请表", sitterFormTitle: "🧑‍🏫 保姆注册", submit: "提交", register: "注册", location: "选择地区" },
    yue: { title: "兒童看護配對平台", parentFormTitle: "👶 家長申請表", sitterFormTitle: "🧑‍🏫 保姆登記", submit: "提交", register: "登記", location: "選擇地區" },
    hi: { title: "चाइल्डकेयर मिलान प्लेटफॉर्म", parentFormTitle: "👶 माता-पिता आवेदन", sitterFormTitle: "🧑‍🏫 बेबीसिटर पंजीकरण", submit: "प्रस्तुत करें", register: "पंजीकरण करें", location: "स्थान चुनें" },
  };

  const [form, setForm] = useState({ location: '' });
  const [sitterForm, setSitterForm] = useState({ location: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSitterChange = (e) => {
    setSitterForm({ ...sitterForm, [e.target.name]: e.target.value });
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">{t.title}</h1>
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border p-2 rounded">
          <option value="ko">🇰🇷 한국어</option>
          <option value="en">🇺🇸 English</option>
          <option value="zh">🇨🇳 中文</option>
          <option value="yue">🇭🇰 粵語</option>
          <option value="hi">🇮🇳 हिन्दी</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">{t.parentFormTitle}</h2>
          <select name="location" value={form.location} onChange={handleChange} className="border p-2 rounded w-full mb-4">
            <option value="">{t.location}</option>
            <option value="Vancouver">Vancouver</option>
            <option value="Burnaby">Burnaby</option>
            <option value="Coquitlam">Coquitlam</option>
            <option value="Port Moody">Port Moody</option>
            <option value="Port Coquitlam">Port Coquitlam</option>
            <option value="Richmond">Richmond</option>
            <option value="Surrey">Surrey</option>
            <option value="New Westminster">New Westminster</option>
            <option value="North Vancouver">North Vancouver</option>
            <option value="West Vancouver">West Vancouver</option>
          </select>
          <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">{t.submit}</button>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">{t.sitterFormTitle}</h2>
          <select name="location" value={sitterForm.location} onChange={handleSitterChange} className="border p-2 rounded w-full mb-4">
            <option value="">{t.location}</option>
            <option value="Vancouver">Vancouver</option>
            <option value="Burnaby">Burnaby</option>
            <option value="Coquitlam">Coquitlam</option>
            <option value="Port Moody">Port Moody</option>
            <option value="Port Coquitlam">Port Coquitlam</option>
            <option value="Richmond">Richmond</option>
            <option value="Surrey">Surrey</option>
            <option value="New Westminster">New Westminster</option>
            <option value="North Vancouver">North Vancouver</option>
            <option value="West Vancouver">West Vancouver</option>
          </select>
          <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">{t.register}</button>
        </div>
      </div>
    </div>
  );
}
