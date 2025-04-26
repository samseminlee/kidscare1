
import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState('ko');
  const [sitters, setSitters] = useState([]);
  const [reviews, setReviews] = useState({});
  const [parentForm, setParentForm] = useState({
    parentName: '', childAge: '', location: '', startTime: '', endTime: '', needs: ''
  });
  const [sitterForm, setSitterForm] = useState({
    sitterName: '', experience: '', languages: '', availableFrom: '', availableTo: '', location: '', photoUrl: ''
  });
  const [matchedSitter, setMatchedSitter] = useState(null);
  const [reviewForm, setReviewForm] = useState({ rating: '5', comment: '' });

  const translations = {
    ko: {
      title: "Childcare 매칭 플랫폼", parentFormTitle: "👶 부모 신청서", sitterFormTitle: "🧑‍🏫 시터 등록",
      submit: "신청하기", register: "등록하기", location: "지역 선택", review: "후기 등록", writeReview: "시터 리뷰 남기기",
      rating: "별점", comment: "후기 입력", registeredSitters: "📋 등록된 시터 목록", matchedSitter: "✅ 매칭된 시터",
      startTime: "돌봄 시작 시간", endTime: "돌봄 종료 시간", availableTime: "가능 시간", reviewLabel: "📣 시터 리뷰:"
    },
    en: {
      title: "Childcare Matching Platform", parentFormTitle: "👶 Parent Application", sitterFormTitle: "🧑‍🏫 Sitter Registration",
      submit: "Submit", register: "Register", location: "Select Location", review: "Submit Review", writeReview: "Leave a Review",
      rating: "Rating", comment: "Your comment", registeredSitters: "📋 Registered Sitters", matchedSitter: "✅ Matched Sitter",
      startTime: "Care Start Time", endTime: "Care End Time", availableTime: "Available Time", reviewLabel: "📣 Sitter Reviews:"
    },
    zh: {
      title: "儿童看护匹配平台", parentFormTitle: "👶 家长申请表", sitterFormTitle: "🧑‍🏫 保姆注册",
      submit: "提交", register: "注册", location: "选择地区", review: "提交评论", writeReview: "留下评论",
      rating: "评分", comment: "您的评论", registeredSitters: "📋 已注册保姆", matchedSitter: "✅ 匹配的保姆",
      startTime: "开始时间", endTime: "结束时间", availableTime: "可用时间", reviewLabel: "📣 保姆评论："
    },
    yue: {
      title: "兒童看護配對平台", parentFormTitle: "👶 家長申請表", sitterFormTitle: "🧑‍🏫 保姆登記",
      submit: "提交", register: "登記", location: "選擇地區", review: "提交評論", writeReview: "發表評論",
      rating: "評分", comment: "你的評論", registeredSitters: "📋 登記保姆", matchedSitter: "✅ 配對保姆",
      startTime: "開始時間", endTime: "結束時間", availableTime: "可用時間", reviewLabel: "📣 保姆評論："
    },
    hi: {
      title: "चाइल्डकेयर मिलान प्लेटफॉर्म", parentFormTitle: "👶 माता-पिता आवेदन", sitterFormTitle: "🧑‍🏫 बेबीसिटर पंजीकरण",
      submit: "प्रस्तुत करें", register: "पंजीकरण करें", location: "स्थान चुनें", review: "समीक्षा जमा करें", writeReview: "समीक्षा लिखें",
      rating: "रेटिंग", comment: "आपकी समीक्षा", registeredSitters: "📋 पंजीकृत सिटर", matchedSitter: "✅ मिलान किया गया सिटर",
      startTime: "प्रारंभ समय", endTime: "समाप्ति समय", availableTime: "उपलब्ध समय", reviewLabel: "📣 सिटर समीक्षाएं:"
    },
  };

  const handleChange = (e) => setParentForm({ ...parentForm, [e.target.name]: e.target.value });
  const handleSitterChange = (e) => setSitterForm({ ...sitterForm, [e.target.name]: e.target.value });
  const handleReviewChange = (e) => setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });

  const t = translations[language];

  const handleParentSubmit = () => {
    const match = sitters.find(sitter => sitter.location === parentForm.location);
    setMatchedSitter(match);
    alert('Matched!');
  };

  const handleSitterSubmit = () => {
    if (!sitterForm.photoUrl) sitterForm.photoUrl = "https://via.placeholder.com/100";
    setSitters([...sitters, sitterForm]);
    setSitterForm({ sitterName: '', experience: '', languages: '', availableFrom: '', availableTo: '', location: '', photoUrl: '' });
  };

  const handleReviewSubmit = () => {
    if (!matchedSitter) return;
    setReviews({
      ...reviews,
      [matchedSitter.sitterName]: [...(reviews[matchedSitter.sitterName] || []), reviewForm]
    });
    setReviewForm({ rating: '5', comment: '' });
  };

  const locationOptions = ["Vancouver", "Burnaby", "Coquitlam", "Port Moody", "Port Coquitlam", "Richmond", "Surrey", "New Westminster", "North Vancouver", "West Vancouver"];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-600">{t.title}</h1>
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border p-2 rounded">
          <option value="ko">🇰🇷 한국어</option>
          <option value="en">🇺🇸 English</option>
          <option value="zh">🇨🇳 中文</option>
          <option value="yue">🇭🇰 粵語</option>
          <option value="hi">🇮🇳 हिन्दी</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">{t.parentFormTitle}</h2>
          <select name="location" value={parentForm.location} onChange={handleChange} className="border p-2 rounded w-full mb-2">
            <option value="">{t.location}</option>
            {locationOptions.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
          <input type="datetime-local" name="startTime" value={parentForm.startTime} onChange={handleChange} className="border p-2 rounded w-full mb-2" placeholder={t.startTime} />
          <input type="datetime-local" name="endTime" value={parentForm.endTime} onChange={handleChange} className="border p-2 rounded w-full mb-2" placeholder={t.endTime} />
          <textarea name="needs" placeholder={t.comment} value={parentForm.needs} onChange={handleChange} className="border p-2 rounded w-full mb-2" />
          <button onClick={handleParentSubmit} className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">{t.submit}</button>

          {matchedSitter && (
            <div className="mt-6 bg-blue-50 p-4 rounded">
              <h3 className="font-semibold mb-2">{t.matchedSitter}</h3>
              <img src={matchedSitter.photoUrl} className="w-20 h-20 rounded-full mx-auto" />
              <p><strong>{matchedSitter.sitterName}</strong></p>
              <p>{matchedSitter.experience}</p>
              <p>{matchedSitter.languages}</p>
              <p>{matchedSitter.availableFrom} ~ {matchedSitter.availableTo}</p>
              <p>{matchedSitter.location}</p>
              <div className="mt-4">
                <h4 className="font-semibold">{t.writeReview}</h4>
                <select name="rating" value={reviewForm.rating} onChange={handleReviewChange} className="border p-2 w-full mb-2">
                  {[5, 4, 3, 2, 1].map(r => <option key={r} value={r}>{'⭐'.repeat(r)}</option>)}
                </select>
                <textarea name="comment" placeholder={t.comment} value={reviewForm.comment} onChange={handleReviewChange} className="border p-2 w-full mb-2" />
                <button onClick={handleReviewSubmit} className="bg-yellow-500 text-white w-full py-2 rounded hover:bg-yellow-600">{t.review}</button>
              </div>
              {reviews[matchedSitter.sitterName]?.length > 0 && (
                <div className="mt-4 text-sm">
                  <h4 className="font-semibold">{t.reviewLabel}</h4>
                  {reviews[matchedSitter.sitterName].map((r, i) => (
                    <div key={i} className="border-t mt-2 pt-1">
                      <p>⭐ {r.rating}</p>
                      <p>{r.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">{t.sitterFormTitle}</h2>
          <input name="sitterName" placeholder="이름" value={sitterForm.sitterName} onChange={handleSitterChange} className="border p-2 rounded w-full mb-2" />
          <input name="experience" placeholder="경력" value={sitterForm.experience} onChange={handleSitterChange} className="border p-2 rounded w-full mb-2" />
          <input name="languages" placeholder="가능 언어" value={sitterForm.languages} onChange={handleSitterChange} className="border p-2 rounded w-full mb-2" />
          <input type="datetime-local" name="availableFrom" value={sitterForm.availableFrom} onChange={handleSitterChange} className="border p-2 rounded w-full mb-2" />
          <input type="datetime-local" name="availableTo" value={sitterForm.availableTo} onChange={handleSitterChange} className="border p-2 rounded w-full mb-2" />
          <select name="location" value={sitterForm.location} onChange={handleSitterChange} className="border p-2 rounded w-full mb-2">
            <option value="">{t.location}</option>
            {locationOptions.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
          <input name="photoUrl" placeholder="사진 URL" value={sitterForm.photoUrl} onChange={handleSitterChange} className="border p-2 rounded w-full mb-2" />
          <button onClick={handleSitterSubmit} className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">{t.register}</button>
        </div>
      </div>

      <h2 className="text-center font-bold text-xl mb-4">{t.registeredSitters}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sitters.map((s, i) => (
          <div key={i} className="bg-white p-4 rounded shadow text-center">
            <img src={s.photoUrl} className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="font-semibold">{s.sitterName}</p>
            <p>{s.languages}</p>
            <p className="text-sm text-gray-500">{s.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
