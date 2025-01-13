import { Head } from '@inertiajs/react';
import Navbar from '../Components/_Navbar';
import Home from '../Pages/_HomeSection';
import Footer from '../Components/_Footer';
import ContactForm from '../Components/_ContactForm';
import SocialLinks from '../Components/_SocialLinks';
import SkillsSection from '../Pages/_SkillsSection';
import Testimonial from '../Components/_Testimonial';
import CoursesCertificationsSection from '../Pages/_CoursesCertificationsSection';
import ProjectCard from '../Components/_ProjectCard';
import AboutSection from '../Pages/_AboutSection';
import ExperienceSection from '../Pages/_ExperienceSection';
import '../_index.css';

export default function Welcome({ auth, laravelVersion, phpVersion, homes, abouts, experiences, testimonials, socialLinks }) {
    console.log(`here is the data homes passed: ${JSON.stringify(homes, null, 2)}`);
    console.log(`here is the data abouts passed: ${JSON.stringify(abouts, null, 2)}`);
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="K.P Folio" />
            <Navbar />
              <SocialLinks socialLinks={socialLinks}/>
              <Home homes={homes} socialLinks={socialLinks}/>
              <AboutSection abouts={abouts} />
              <ProjectCard />
              <SkillsSection />
              <ExperienceSection experiences={experiences}/>
              <CoursesCertificationsSection />
              <Testimonial testimonials={testimonials} />
              <ContactForm />
              <Footer />
        </>
    );
}
