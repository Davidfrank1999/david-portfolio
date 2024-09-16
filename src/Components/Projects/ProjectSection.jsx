import React, { useEffect, useState } from 'react';
import styles from './Project.module.css'
import Project from './Project'

import frame1 from "../../assets/Frame_1.png"

export default function ProjectSection(){

    // Project list
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
        const username = 'Davidfrank1999';
        const repoNames = ['david-portifolio','bioinformatics', 'python_freecodecamp', 'front_end']; // Replace with your repository names
        const repoImg = [frame1,
            'https://repository-images.githubusercontent.com/790111308/54bd1933-8e59-4b0e-86e3-32f088c965d9',
             'https://media.licdn.com/dms/image/v2/D562DAQGSGlDp81PW_Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1725601415715?e=1726488000&v=beta&t=BMuEqf_RxdU43zZpj6uMM6bCyaFmdLHiLfI4v0FgPKk',
            'https://i.pinimg.com/564x/17/22/24/1722244094738967b5c0b748e92571bf.jpg']

        const repoData = await Promise.all(repoNames.map(async (repoName, index) => {
                const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
                const repo = await response.json();
                return {
                    ...repo,
                    image: repoImg[index] // Replace with actual image path
                };
            }));

            setRepos(repoData);
        };

        fetchRepos();
    }, []);


    return(
        <section id="ProjectSection" className={styles.ProjectContainer}>
            {repos.map(repo => (
                    <Project key={repo.id} repo={repo} />
                ))}
        </section>
    )
}