import React from "react";
import "../Comments/Comments.scss"
import grayImage from "../../assets/Images/mercury.png"

function getTimeDifference(timestamp) {
    const current = new Date().getTime();
    const previous = new Date(timestamp).getTime();
    const msPerMonth = 30 * 24 * 60 * 60 * 1000; // Number of milliseconds in a month
    const msPerYear = 365 * 24 * 60 * 60 * 1000; // Number of milliseconds in a year
    const elapsed = current - previous;
    
    if (elapsed < msPerMonth) {
      return Math.round(elapsed / (24 * 60 * 60 * 1000)) + ' days ago';
    } else if (elapsed < msPerYear) {
      const months = Math.round(elapsed / msPerMonth);
      return months + (months == 1 ? ' month' : ' months') + ' ago';
    } else {
      const years = Math.round(elapsed / msPerYear);
      const months = Math.round((elapsed % msPerYear) / msPerMonth);
      return years + (years == 1 ? ' year' : ' years') + ' and ' + months + (months == 1 ? ' month' : ' months') + ' ago';
    }
  }

function Comments({selectedVideo}) {
    const {comments} = selectedVideo;
    return (
        <section className="comments">
           {
             comments.map(comment =>
            <div className="comment">
                <img src={grayImage} alt="empty profile picture"></img>
                <div className="comment__wrapper">
                    <div className = "comment__title">
                        <p className="comment__title--name">{comment.name}</p>
                        <p className="comment__title--date">{getTimeDifference(comment.timestamp)}</p>
                    </div>
                    <p className="comment__text">{comment.comment}</p>
                </div>
            </div>
            )}
        </section>
)}

export default Comments;

// import React from "react";
// import "../Comments/Comments.scss"
// import grayImage from "../../assets/Images/mercury.png"

// function Comments({selectedVideo}) {
//     const {comments} = selectedVideo;
//     return (
//         <section className="comments">
//            {
//              comments.map(comment =>
//             <div className="comment">
//                 <img src={grayImage} alt="empty profile picture"></img>
//                 <div className="comment__wrapper">
//                     <div className = "comment__title">
//                         <p className="comment__title--name">{comment.name}</p>
//                         <p className="comment__title--date">{new Date(comment.timestamp).toLocaleDateString()}</p>
//                     </div>
//                     <p className="comment__text">{comment.comment}</p>
//                 </div>
//             </div>
//             )}
//         </section>
// )}

// export default Comments;
