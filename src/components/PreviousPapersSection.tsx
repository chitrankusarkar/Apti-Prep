import React from 'react';
import previousPapersData from '../data/previousPapers.json';

const PreviousPapersSection: React.FC = () => {
    return (
        <section id="previous-papers" className="section">
            <h2>Previous Year TCS NQT Papers</h2>
            <ul className="card-grid papers">
                {previousPapersData.map((paper, index) => (
                    <li key={index} className="card">
                        <a href={paper.downloadLink} target="_blank" rel="noopener noreferrer">
                            {paper.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default PreviousPapersSection;