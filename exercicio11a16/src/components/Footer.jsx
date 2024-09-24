import React from 'react';
import './Footer.css';

const Footer = () => {
  const members = [
    {
      name: 'Isaac Silva',
      avatar: 'https://via.placeholder.com/50',
      linkedin: 'https://www.linkedin.com/in/isaac-silva/'
    },
    {
      name: 'Maria Oliveira',
      avatar: 'https://via.placeholder.com/50',
      linkedin: 'https://www.linkedin.com/in/maria-oliveira/'
    },
    {
      name: 'João Santos',
      avatar: 'https://via.placeholder.com/50',
      linkedin: 'https://www.linkedin.com/in/joao-santos/'
    },
    {
      name: 'Ana Costa',
      avatar: 'https://via.placeholder.com/50',
      linkedin: 'https://www.linkedin.com/in/ana-costa/'
    },
  ];

  return (
    <footer className="footer">
      <h2>Equipe</h2>
      <ul className="member-list">
        {members.map((member, index) => (
          <li key={index} className="member">
            <img src={member.avatar} alt={`${member.name} Avatar`} className="avatar" />
            <div className="member-info">
              <span className="member-name">{member.name}</span>
              <a href={member.linkedin} className="linkedin-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
