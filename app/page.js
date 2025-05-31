import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="header">Harshit Masalawala</h1>
        <div className="AboutMe">
          <h2>Fun facts about me</h2>
          <li>I used to skateboard</li>
          <br />
          <li>
            <a href="https://en.wikipedia.org/wiki/The_dress">The dress</a> is blue and black!
          </li>
          <br />
          <li>I made this website at HacKnight!</li>
        </div>
        <div>
          <img className="image" src="download.png" width="600px" height="300px" />
        </div>
        <div className="Contact">
          <h2>Contacts</h2>
          <li>
            harshitmet@gmail.com
          <li>
            (978)-446-4417
          </li>
          </li>
          <li>
            <a href="https://www.instagram.com/hari122139/">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/pythonwizard3154">Github</a>
          </li>
          
        </div>
      </div>
  );
}

