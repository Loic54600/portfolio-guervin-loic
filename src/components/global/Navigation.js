import React from 'react';

const Navigation = () => {
    return (
        <header class="top-header">
		<h1 class="top-header_title">Portfolio</h1>
		<div class="nav">
			<ul>
                <li><a href="#">Accueil</a></li>
				<li><a href="#présentation">Présentation</a></li>
				<li><a href="#compétences">Compétences</a></li>
				<li><a href="#projets_professionnel">Projets-professionnel</a></li>
				<li><a href="#contact">Contact</a></li>

			</ul>
		</div>
	</header>
    );
};

export default Navigation;