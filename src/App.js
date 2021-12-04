import "./App.css";

import Question from "./components/Question";

function App() {
  const questions = [
    {
      title: "How many team members can I invite?",
      body: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
      id: 1,
    },
    {
      title: "What is the maximum file upload size?",
      body: "No more than 2GB. All files in your account must fit your allotted storage space.",
      id: 2,
    },
    {
      title: "How do I reset my password?",
      body: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
      id: 3,
    },
    {
      title: "Can I cancel my subscription?",
      body: "Yes! Send us a message and we’ll process your request no questions asked.",
      id: 4,
    },
    {
      title: "Do you provide additional support?",
      body: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
      id: 5,
    },
  ];

  return (
    <div className="main">
      <div className="card">
        <div className="img"></div>
        <div className="faq">
          <h2>FAQ</h2>
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
