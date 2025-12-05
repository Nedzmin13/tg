import { motion } from 'framer-motion';
import { FaChair } from 'react-icons/fa';
import { MdTableRestaurant, MdFence } from 'react-icons/md';
import { GiGate } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './HomeStyles.css';

const services = [
    { id: 1, title: 'Sedie', desc: 'Dal disegno al prodotto finito, oltre 100 modelli disponibili', icon: <FaChair />, link: '/servizi/sedie' },
    { id: 2, title: 'Tavoli su Misura', desc: 'Tavoli personalizzati in metallo e legno per ogni esigenza', icon: <MdTableRestaurant />, link: '/servizi/tavoli' },
    { id: 3, title: 'Cancelli', desc: 'Cancelli in ferro moderni, classici, pedonali e carrai', icon: <GiGate />, link: '/servizi/cancelli' },
    { id: 4, title: 'Ringhiere', desc: 'Ringhiere per interni ed esterni, parapetti e scale', icon: <MdFence />, link: '/servizi/ringhiere' },
];

const ServicesPreview = () => {
    return (
        <section className="section-padding services-preview">
            <div className="container">
                <motion.div
                    className="grid-container"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className="service-card"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                            }}
                        >
                            <Link to={service.link} style={{ textDecoration: 'none' }}>
                                <div className="icon-box">
                                    {service.icon}
                                </div>
                            </Link>

                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <Link to={service.link} className="read-more">Scopri di più &rarr;</Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesPreview;