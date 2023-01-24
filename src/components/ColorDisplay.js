import { useParams } from 'react-router-dom';
import './ColorDisplay.css';

export default function ColorDisplay() {
  const { redValue, greenValue, blueValue } = useParams();

  return (
    <div>
      <p
        className="colorChoice"
        style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})` }}
      >
        Oooooo nice choice! <br></br> {redValue}, {greenValue}, {blueValue}
      </p>
    </div>
  );
}
