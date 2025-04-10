import '../App.css';
import '../styles/Task.css';
function Home() {
    return (
      <div className="position-relative overflow-hidden">
        {/* Main Row Section */}
        <div
          className="d-flex flex-column flex-md-row align-items-center justify-content-center mx-auto my-5"
          style={{
            width: "100%",
            minHeight: "50vh",

            background: "none",
            
          }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D4D12AQEn7iaT75cWSw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1662465946904?e=2147483647&v=beta&t=zq_CLfKyigJbu5zeW-uEc5kum8QAFjMk0bgUBYnrDJU"
            className="img-fluid mb-4 mb-md-0"
            id="light"
            style={{
              width: "40%",
              height: "auto",
              
              
            }}
          />
        
          
         <div className="glass-effect-box">
            <p className="tsm-animated-text">
                <span className="typewriter">Welcome to your ultimate Task Management System . . . </span>
                <br />
                <span className="fade-in-delay">
                where time isn't just tracked, it's respected. Because every second counts, and once it's gone... it never comes back.
                Master your minutes, and you’ll conquer your goals with purpose.
                </span>
            </p>
         </div>



        </div>
  
        {/* Decorative Floating Bubbles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="position-absolute bubble"
            style={{
              width: `${10 + Math.random() * 10}px`,
              height: `${10 + Math.random() * 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              borderRadius: "50%",
              border: `2px solid ${["#ff0000", "#facc15", "#a0522d"][i % 3]}`, // red, yellow, brown
              opacity: 0.6,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
            }}
          ></div>
        ))}
  
        {/* Bubble Animation Style */}
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }
          `}
        </style>
        <div className="text-center mt-5">
            <a href="/task"className="custom-circle-btn animated-dash"id="go" > Go </a>
        </div>
            
      </div>

    );
  }
  
  export default Home;
 
 