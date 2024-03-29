import React from 'react';
import './LegalAnalyticsTable.css';

// Define your features data
const legalAnalyticsFeatures = [
  { id: 1, feature: "Case Prediction", description: "Uses AI to predict the outcome of cases based on historical data and trends." },
  { id: 2, feature: "Legal Research", description: "Automates the process of finding relevant case laws and statutes, saving time and increasing accuracy." },
  { id: 3, feature: "Document Analysis", description: "Employs natural language processing to analyze legal documents for pertinent information and insights." },
  { id: 4, feature: "Judgment Analysis", description: "Analyzes past judgments to provide insights into judicial trends and decision-making patterns." },
  { id: 5, feature: "Risk Management", description: "Helps identify legal risks and provides recommendations to mitigate them effectively." },
  { id: 6, feature: "Compliance Tracking", description: "Tracks changes in laws and regulations to ensure that businesses remain compliant with Indian legal requirements." },
  { id: 7, feature: "Litigation Analytics", description: "Offers analytics on past litigations to strategize better for future cases." },
  { id: 8, feature: "Performance Analytics", description: "Analyzes the performance of legal teams and lawyers to optimize case handling and resource allocation." },
];

// Table component
const LegalAnalyticsTable = () => {
    return (
      <div>
        {/* <h2>Legal Analytics Features in the Indian Context</h2> */}
        <table className="legalAnalyticsTable">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {legalAnalyticsFeatures.map((feature) => (
              <tr key={feature.id}>
                <td>{feature.feature}</td>
                <td>{feature.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default LegalAnalyticsTable;
  
