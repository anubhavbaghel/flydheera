import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        package: 'Chardham Yatra',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry. Our team will contact you shortly.');
        // Here we would typically send the data to a backend
    };

    return (
        <div className="pt-20">
            <section className="bg-primary text-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Ready to start your journey? Get in touch with us for bookings and inquiries.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <SectionHeader title="Get in Touch" subtitle="We are here to help" centered={false} />

                            <div className="space-y-6">
                                {[
                                    { icon: MapPin, title: 'Our Office', content: 'New Delhi, India', sub: 'Corp Office: DHEERA AVIATION LLP' },
                                    { icon: Phone, title: 'Call Us', content: '+91 73037 14400', sub: 'Mon-Sat, 9am - 6pm' },
                                    { icon: Mail, title: 'Email Us', content: 'booking@flydheera.co.in', sub: 'For bookings & general queries' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="bg-secondary/10 p-4 rounded-full">
                                            <item.icon className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                                            <p className="text-lg font-medium text-gray-800">{item.content}</p>
                                            <p className="text-sm text-gray-500">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden mt-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709667547566!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Flydheera Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                                            placeholder="John Doe"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                                            placeholder="+91 98765 43210"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                                        placeholder="john@example.com"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Interested Package</label>
                                    <select
                                        name="package"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                                        onChange={handleChange}
                                        value={formData.package}
                                    >
                                        <option>Chardham Yatra</option>
                                        <option>Do Dham Yatra</option>
                                        <option>Ek Dham Yatra</option>
                                        <option>Heli Joyride</option>
                                        <option>Private Charter</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all resize-none"
                                        placeholder="Tell us about your travel dates and requirements..."
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <Button type="submit" size="lg" className="w-full">
                                    Send Inquiry
                                    <Send className="w-4 h-4 ml-2" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
