import React from 'react';

const Navigation = () => {
    return (
        <header className="top-header">
		<h1 className="top-header_title">Portfolio</h1>
		<div className="nav">
			<ul>
				<li><a href="#competences">Compétences</a></li>
				<li><a href="#projets_professionnel">Projets-professionnel</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</div>
	</header>
    );
};

export default Navigation;