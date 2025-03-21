
import React from 'react';
import Hero from '../components/Hero';
import TrainingCard from '../components/TrainingCard';
import CourseCard from '../components/CourseCard';
import ArticleCard from '../components/ArticleCard';
import ProcessStep from '../components/ProcessStep';
import StatBlock from '../components/StatBlock';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Formations Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title">Formations</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-600">
              Avec les formations de PECB, la seule limite aux opportunités est votre imagination. 
              Quel que soit votre domaine d'expertise, PECB propose des formations qui répondent à vos besoins 
              et reflètent les dernières normes, technologies, approches, méthodes innovantes et exemples pratiques.
            </p>
          </div>

          <div className="space-y-6">
            <TrainingCard 
              title="ISO/IEC 27001 Information Security Management Systems" 
              description="La certification ISO/IEC 27001 démontre votre engagement à aider les organismes à gérer l'information de manière sûre et efficace."
              image="/lovable-uploads/2697dadb-bd7e-456d-a5c3-9ca1ed98f25c.png"
              link="/iso27001"
            />
            <TrainingCard 
              title="ISO 22301 Business Continuity Management System" 
              description="La norme internationale ISO 22301 relative aux systèmes de management de la continuité d'activité (SMCA) est un cadre complet conçu pour permettre aux organismes de se préparer efficacement à des incidents inattendus, d'y répondre et de s'en remettre."
              image="/lovable-uploads/c932e499-0910-4283-b712-f7fe61d111d9.png"
              link="/iso22301"
            />
            <TrainingCard 
              title="Cybersecurity Maturity Model Certification (CMMC)" 
              description="Le cadre Cybersecurity Maturity Model Certification (CMMC) est un mécanisme de vérification conçu pour évaluer le niveau de maturité des organisations en matière de protection des informations non classifiées."
              image="/lovable-uploads/29c7cb26-cbe1-41e7-a0bc-0c766c3e01a4.png"
              link="/cmmc"
            />
          </div>

          <div className="mt-10 text-center">
            <a href="/formation" className="btn-primary">
              Voir tout
            </a>
          </div>
        </div>
      </section>

      {/* Formats de livraison */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/2290727d-3e2d-4640-9710-f7317175aa16.png" 
                alt="Formats de livraison des formations" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Formats de livraison des formations</h2>
              <p className="text-gray-600 mb-6">
                PECB demeure soucieuse de reconnaître cette multitude de types d'apprenants et de les aider tous à améliorer leurs compétences et à se développer professionnellement et intellectuellement. Pour y parvenir et faire en sorte que l'apprentissage soit enrichissant, PECB dispose d'options qui répondent facilement et efficacement aux besoins et aux préférences de chaque apprenant.
              </p>
              <a href="/delivery-formats" className="btn-primary">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Assistez aux formations partout dans le monde */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title">Assistez aux formations <span className="font-bold">partout dans le monde</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <CourseCard 
              title="ISO 9001 Lead Auditor"
              location="Saudi Arabia"
              date={{ month: "MAR", day: "21" }}
              language="English"
            />
            <CourseCard 
              title="ISO 31000 Risk Manager"
              location="Saudi Arabia"
              date={{ month: "MAR", day: "21" }}
              language="English"
            />
            <CourseCard 
              title="ISO 22301 Lead Auditor"
              location="Saudi Arabia"
              date={{ month: "MAR", day: "21" }}
              language="English"
            />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-1 md:col-span-4 text-lg font-medium mb-2">
                Calendrier des formations
              </div>
              <div>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Sélectionnez une formation</option>
                </select>
              </div>
              <div>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Sélectionnez un pays</option>
                </select>
              </div>
              <div>
                <input type="text" placeholder="Ville" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <button className="w-full btn-primary">Rechercher</button>
              </div>
            </div>
            <div className="mt-4 text-right">
              <a href="/sessions" className="text-primary hover:text-primary-hover flex items-center justify-end">
                <span>Voir les sessions offertes</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Processus de certification */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Processus de <span className="font-bold">certification</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <ProcessStep 
              title="Décidez quelle certification vous convient le mieux" 
            />
            <ProcessStep 
              title="Participez à la formation de votre choix" 
            />
            <ProcessStep 
              title="Préparez et programmez l'examen" 
            />
            <ProcessStep 
              title="Demandez et obtenez la certification" 
            />
            <ProcessStep 
              title="Maintenez votre certification"
              isLast
            />
          </div>
        </div>
      </section>

      {/* Aperçu Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title">Aperçu</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ArticleCard 
              category="Articles"
              title="How ISO Certifications Help You Achieve Digital Trust"
              excerpt="In a world, where cybersecurity threats, data breaches, ...."
              image="/lovable-uploads/5f8f319b-5c0f-4eb6-ad85-1ef149588402.png"
              link="/articles/digital-trust"
            />
            <ArticleCard 
              category="Webinaires"
              title="The Role of ISO/IEC 27034 in Achieving DORA Compliance"
              excerpt="The Digital Operational Resilience Act (DORA) compliance de...."
              image="/lovable-uploads/2697dadb-bd7e-456d-a5c3-9ca1ed98f25c.png"
              link="/webinars/dora-compliance"
            />
            <ArticleCard 
              category="Actualités"
              title="PECB has signed a partnership agreement with LBMC"
              excerpt="It is with great pleasure that PECB announces a new partnership a...."
              image="/lovable-uploads/29c7cb26-cbe1-41e7-a0bc-0c766c3e01a4.png"
              link="/news/lbmc-partnership"
              linkText="Lire la suite"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <h2 className="section-title mb-12">Présents dans le monde entier</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBlock value="150+" label="Pays" />
            <StatBlock value="2600+" label="Partenaires" />
            <StatBlock value="2400+" label="Formateurs" />
            <StatBlock value="90000+" label="Professionnels certifiés" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
