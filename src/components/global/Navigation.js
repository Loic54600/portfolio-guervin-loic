import React from 'react';

const Navigation = () => {
	return (
		<header className="top-header">
			<div className="header_title">
					<h1 className="top-header_p">Développeur Web <span className="top-header_h1_color">& web mobile</span></h1>		
			</div>
			<div class="dropdown">
				<button class="dropbtn">Menu</button>
				<div class="dropdown-content">
					<a href="#competences">Compétences</a>
					<a href="#github">Github</a>
					<a href="#projets_professionnel">Projets-professionnel</a>
					<a href="#contact">Contact</a>
				</div>
			</div>
		</header>
	);
};

export default Navigation;