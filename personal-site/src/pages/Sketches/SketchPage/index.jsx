import { useNavigate, useParams } from 'react-router-dom';
import Sketch01 from '../sketch01';
import Sketch02 from '../Sketch02';
import Sketch03 from '../Sketch03';
import Sketch04 from '../Sketch04';
import Sketch05 from '../Sketch05';
import ArrowRightIcon from '../../../components/icons/ArrowRightIcon';
import ArrowLeftIcon from '../../../components/icons/ArrowLeftIcon';
import IconButton from '../../../components/IconButton';

const sketches = {
    1: Sketch01,
    2: Sketch02,
    3: Sketch03,
    4: Sketch04,
    5: Sketch05
    // add other sketches as needed
};


const SketchPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const sketchId = id ? parseInt(id) : 1;
    const maxSketchId = Math.max(...Object.keys(sketches).map(Number));

    const handleLeftClick = () => {
        if (sketchId > 1) {
            navigate(`/sketches/${sketchId - 1}`);
        }
    };

    const handleRightClick = () => {
        if (sketchId < maxSketchId) {
            navigate(`/sketches/${sketchId + 1}`);
        }    
    };

    const SketchComponent = sketches[sketchId];

    return (
        <>
            <div className="flex flex-col">
                <div className="flex float-left gap-1">
                    <IconButton onClick={handleLeftClick}>
                        <ArrowLeftIcon color='#000000'/>
                    </IconButton>
                    <IconButton onClick={handleRightClick}>
                        <ArrowRightIcon color='#000000'/>
                    </IconButton>
                </div>
                {SketchComponent && <SketchComponent />}
            </div>

        </>
    );
};

export default SketchPage;