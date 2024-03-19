import { toHaveFormValues } from "@testing-library/jest-dom/matchers";
import "./Heart.css";

function Heart({ onClick, selected = false, testId="heart" }) {
    return (
        <svg
            version="1.1"
            viewBox="0 0 472.7 472.7"
				data-testid={testId}
            className={`heart${selected ? " heart-selected" : ""}`}
            onClick={onClick}
        >
            <g>
                <path id="XMLID_810_" d="M433.5,67c-25.3-25.3-59-39.3-94.8-39.3s-69.6,14-94.9,39.4l-7.3,7.3l-7.5-7.5
                    c-25.4-25.4-59.1-39.4-95-39.4c-35.8,0-69.4,13.9-94.7,39.3C13.9,92.2,0,125.9,0,161.7s14,69.5,39.4,94.8l182.7,182.7
                    c3.8,3.8,9,6,14.5,6c5.4,0,10.6-2.2,14.5-6l182.2-182.4c25.4-25.4,39.3-59.1,39.4-94.9S458.8,92.4,433.5,67z M132.5,117.2
                    c-23.9,0-43.4,19.5-43.4,43.4c0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-45.8,37.3-83.1,83.1-83.1c11,0,19.9,8.9,19.9,19.9
                    C152.4,108.4,143.5,117.2,132.5,117.2z"/>
            </g>
        </svg>
    );
}

export default Heart;
