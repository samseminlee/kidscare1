
import { useState } from 'react';

export default function Home() {
  const [sitters, setSitters] = useState([]);
  const [reviews, setReviews] = useState({});
  const [parentForm, setParentForm] = useState({
    parentName: '',
    childAge: '',
    location: '',
    startTime: '',
    endTime: '',
    needs: '',
  });
  const [sitterForm, setSitterForm] = useState({
    sitterName: '',
    experience: '',
    languages: '',
    availableFrom: '',
    availableTo: '',
    location: '',
    photoUrl: '',
  });
  const [matchedSitter, setMatchedSitter] = useState(null);
  const [reviewForm, setReviewForm] = useState({ rating: '5', comment: '' });

  const handleParentChange = (e) => {
    setParentForm({ ...parentForm, [e.target.name]: e.target.value });
  };

  const handleSitterChange = (e) => {
    setSitterForm({ ...sitterForm, [e.target.name]: e.target.value });
  };

  const handleReviewChange = (e) => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  };

  const handleParentSubmit = () => {
    const match = sitters.find(
      (sitter) =>
        sitter.location.toLowerCase().includes(parentForm.location.toLowerCase())
    );
    setMatchedSitter(match);
    alert('부모 신청 완료! 매칭된 시터를 확인하세요.');
  };

  const handleSitterSubmit = () => {
    if (!sitterForm.photoUrl) sitterForm.photoUrl = 'https://via.placeholder.com/100';
    setSitters([...sitters, sitterForm]);
    setSitterForm({
      sitterName: '', experience: '', languages: '', availableFrom: '', availableTo: '', location: '', photoUrl: '',
    });
    alert('시터 등록 완료!');
  };

  const handleReviewSubmit = () => {
    if (!matchedSitter) return;
    setReviews({
      ...reviews,
      [matchedSitter.sitterName]: [...(reviews[matchedSitter.sitterName] || []), reviewForm]
    });
    setReviewForm({ rating: '5', comment: '' });
    alert('후기 등록 완료!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Childcare Matching Platform</h1>
        <p className="mt-2 text-gray-600">믿을 수 있는 시터를 쉽고 빠르게 찾으세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-blue-500 mb-4">👶 부모 신청서</h2>
          <div className="flex flex-col gap-3">
            <input className="border p-2 rounded" name="parentName" placeholder="부모 이름" value={parentForm.parentName} onChange={handleParentChange} />
            <input className="border p-2 rounded" name="childAge" placeholder="아이 나이" value={parentForm.childAge} onChange={handleParentChange} />
            <input className="border p-2 rounded" name="location" placeholder="희망 지역" value={parentForm.location} onChange={handleParentChange} />
            <label>돌봄 시작 시간</label>
            <input className="border p-2 rounded" type="datetime-local" name="startTime" value={parentForm.startTime} onChange={handleParentChange} />
            <label>돌봄 종료 시간</label>
            <input className="border p-2 rounded" type="datetime-local" name="endTime" value={parentForm.endTime} onChange={handleParentChange} />
            <textarea className="border p-2 rounded" name="needs" placeholder="요청사항" value={parentForm.needs} onChange={handleParentChange}></textarea>
            <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={handleParentSubmit}>신청하기</button>
          </div>

          {matchedSitter && (
            <div className="mt-6 bg-blue-50 p-4 rounded">
              <h3 className="text-lg font-semibold text-center">✅ 매칭된 시터</h3>
              <img src={matchedSitter.photoUrl} alt="시터" className="w-24 h-24 mx-auto rounded-full object-cover my-2" />
              <p><strong>이름:</strong> {matchedSitter.sitterName}</p>
              <p><strong>경력:</strong> {matchedSitter.experience}</p>
              <p><strong>언어:</strong> {matchedSitter.languages}</p>
              <p><strong>시간:</strong> {matchedSitter.availableFrom} ~ {matchedSitter.availableTo}</p>
              <p><strong>지역:</strong> {matchedSitter.location}</p>

              <div className="mt-4">
                <h4 className="font-semibold">📝 시터 리뷰 남기기</h4>
                <select name="rating" value={reviewForm.rating} onChange={handleReviewChange} className="border p-2 rounded w-full">
                  {[5,4,3,2,1].map(r => <option key={r} value={r}>{'⭐'.repeat(r)}</option>)}
                </select>
                <textarea name="comment" className="border p-2 rounded w-full mt-2" placeholder="후기를 입력하세요" value={reviewForm.comment} onChange={handleReviewChange}></textarea>
                <button onClick={handleReviewSubmit} className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 mt-2 w-full">후기 등록</button>
              </div>

              {reviews[matchedSitter.sitterName]?.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold">📣 시터 리뷰:</h4>
                  {reviews[matchedSitter.sitterName].map((r, i) => (
                    <div key={i} className="text-sm border-t mt-2 pt-2">
                      <p><strong>⭐ {r.rating}점</strong></p>
                      <p>{r.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-green-500 mb-4">🧑‍🏫 시터 등록</h2>
          <div className="flex flex-col gap-3">
            <input className="border p-2 rounded" name="sitterName" placeholder="이름" value={sitterForm.sitterName} onChange={handleSitterChange} />
            <input className="border p-2 rounded" name="experience" placeholder="경력" value={sitterForm.experience} onChange={handleSitterChange} />
            <input className="border p-2 rounded" name="languages" placeholder="가능 언어" value={sitterForm.languages} onChange={handleSitterChange} />
            <label>시작 가능 시간</label>
            <input className="border p-2 rounded" type="datetime-local" name="availableFrom" value={sitterForm.availableFrom} onChange={handleSitterChange} />
            <label>종료 가능 시간</label>
            <input className="border p-2 rounded" type="datetime-local" name="availableTo" value={sitterForm.availableTo} onChange={handleSitterChange} />
            <input className="border p-2 rounded" name="location" placeholder="가능 지역" value={sitterForm.location} onChange={handleSitterChange} />
            <input className="border p-2 rounded" name="photoUrl" placeholder="사진 URL (선택)" value={sitterForm.photoUrl} onChange={handleSitterChange} />
            <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600" onClick={handleSitterSubmit}>등록하기</button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center text-gray-700 mt-12">📋 등록된 시터 목록</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {sitters.map((sitter, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img src={sitter.photoUrl} alt="시터" className="w-20 h-20 mx-auto rounded-full object-cover" />
            <p className="font-semibold mt-2">{sitter.sitterName}</p>
            <p className="text-gray-500 text-sm">{sitter.languages}</p>
            <p className="text-gray-400 text-sm">{sitter.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
