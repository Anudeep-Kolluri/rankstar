// app/page.tsx
export default function Page() {
  return (
    <div className="job-description-page">
      <h1>Enter Job Description</h1>
      <textarea className="job-input" placeholder="Type here..."></textarea>
      <button className="submit-button">Submit</button>
    </div>
  );
}