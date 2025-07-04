import React from "react";
import { Head } from '@inertiajs/react';

import { 
    IconArrowLeft,
    IconDownload,
    IconHome,
    IconPhoneCall,
    IconMail,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandGithub,
    IconCopyright,
} from "@tabler/icons-react";

export default function Resume() {

    return (
        <section id="Resume" className="py-16 bg-black text-white">
            <Head title="Resume" />
            {/* <SplashCursor /> */}
            {/* Header */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex justify-between items-center border-b pb-4">
                    <a href="/" className="text-gray-200 flex items-center gap-2 hover:text-purple-500">
                        <IconArrowLeft size={20} />
                        Back Home
                    </a>
                    <h2 className="text-3xl font-bold text-gray-100">My Resume</h2>
                    <a 
                        href="/assets/CV_RezaChairul.pdf" 
                        download="Reza_Chairul_Manam_CV.pdf" 
                        className="px-6 py-2 border-purple-700 text-purple-700 border-2 rounded-lg hover:border-purple-500 hover:bg-purple-500 hover:text-white flex items-center gap-2"
                    >
                        <IconDownload size={20} />
                        Download
                    </a>
                </div>

                {/* Nama dan Kontak */}
                <div className="text-center mt-5">
                    <h1 className="text-4xl font-bold">REZA CHAIRUL MANAM</h1>
                    {/* Alamat */}
                    <div className="flex justify-center items-center gap-6 mt-2 text-base">
                        <a href="https://maps.app.goo.gl/1yq6J2GwWhRBXKWA8" className="flex items-center gap-2">
                            <IconHome size={20} className="text-white" />
                            <span>Jl. Padmosari I No. 240, RT 005/RW 002, Desa Haduyang, Kec. Natar, Kab. Lampung Selatan, Lampung</span>
                        </a>
                    </div>
                    {/* Kontak */}
                    <div className="flex justify-center items-center gap-6 mt-2 text-lg">
                        <a href="https://wa.me/6288269620552" className="flex items-center gap-2">
                            <IconPhoneCall size={20} className="text-red-500" />
                            <span>+62 882 6962 0552</span>
                        </a>
                        <a href="mailto:rezachairul6@gmail.com" className="flex items-center gap-2">
                            <IconMail size={20} className="text-gray-400" />
                            <span>rezachairul6@gmail.com</span>
                        </a>
                    </div>
                    {/* Sosial Media */}
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="https://www.linkedin.com/in/reza-chairul6" className="flex items-center gap-2 text-blue-600 hover:text-blue-500">
                            <IconBrandLinkedin size={24} /> <span>reza-chairul6</span>
                        </a>
                        <a href="https://github.com/rezachairul" className="flex items-center gap-2 text-gray-200 hover:text-gray-500">
                            <IconBrandGithub size={24} /> <span>rezachairul</span>
                        </a>
                        <a href="https://instagram.com/rezachairul6" className="flex items-center gap-2 text-pink-600 hover:text-pink-500">
                            <IconBrandInstagram size={24} /> <span>rezachairul6</span>
                        </a>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">PROFILE</h3>
                    <p className="text-lg text-justify leading-relaxed text-gray-300">
                        Hi there! 👋 I'm <span className="font-semibold text-white">Reza Chairul Manam</span>, I'm currently living in Lampung, Indonesia. 
                        I'm an Informatics Engineering student at the Sumatra Institute of Technology who loves everything about WebGIS and web development. Currently, I'm working with 
                        <span className="text-rose-400"><a href="https://laravel.com/"> Laravel</a></span>, <span className="text-blue-400"> <a href="https://react.dev/"> React</a></span>, <span className="text-green-400"><a href="https://www.postgresql.org/"> PostgreSQL</a></span>, 
                        and <span className="text-sky-400"><a href="https://tailwindcss.com/"> Tailwind CSS</a></span> to build interactive and scalable applications.
                    </p>
                    <p className="mt-4 text-lg text-justify leading-relaxed text-gray-300">
                        Right now, I'm focused on a WebGIS project, exploring how geospatial data can be visualized and managed efficiently. I enjoy 
                        problem-solving and bringing ideas to life through code.
                    </p>
                    <p className="mt-4 text-lg text-justify leading-relaxed text-gray-300">
                        Beyond coding, I have a passion for <span className="font-semibold text-white">graphic design</span>, <span className="font-semibold text-white">photography</span>, 
                        and <span className="font-semibold text-white">video editing</span>. Whether it's creating visuals, capturing moments, or editing content, 
                        I love expressing creativity in different ways.
                    </p>
                    <p className="mt-4 text-lg text-justify font-semibold text-indigo-300">
                        Let’s connect and create something awesome together! 🚀
                    </p>
                </div>

                {/* Education Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">EDUCATION</h3>
                    <div className="flex justify-between text-gray-300">
                        <div>
                            <span className="font-semibold">Bachelor’s Degree – Informatics Engineering</span><br />
                            Institut Teknologi Sumatera, Lampung<br />
                            GPA: 3.00/4.00 scale
                        </div>
                        <span className="font-semibold">2020 – 2026</span>
                    </div>
                    <p className="mt-2 text-gray-300 italic">
                        Final Thesis: WebGIS-Based Heavy Equipment Distribution Point Information System Design Using Agile LSD Method, Case Study: PT. Fajar Anugerah Dinamika.
                    </p>
                </div>

                {/* Experience Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">EXPERIENCE</h3>
                    <p className="font-semibold mt-2">Company/Institution</p>
                    <p className="text-gray-700">Job Title | <span className="font-semibold">mm yyyy - mm yyyy</span></p>
                    <ul className="list-disc pl-5 mt-2 text-gray-700">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Ut in euismod nulla. Integer auctor nisi a massa hendrerit, id porta orci efficitur.</li>
                    </ul>
                </div>

                {/* Projects Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">PROJECTS</h3>
                    <p className="font-semibold mt-2">Project Title</p>
                    <p className="text-gray-700"><span className="font-semibold">mm yyyy - mm yyyy</span></p>
                    <ul className="list-disc pl-5 mt-2 text-gray-700">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Ut in euismod nulla. Integer auctor nisi a massa hendrerit, id porta orci efficitur.</li>
                    </ul>
                </div>

                {/* Organizational Experience Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">ORGANIZATIONAL EXPERIENCE</h3>
                    <ul className="mt-2 text-gray-400">
                        <li className="flex justify-between">
                            <span>
                                <span className="font-semibold text-gray-300">Unit Kegiatan Mahasiswa Bidang Seni Musik ITERA</span><br />
                                Ketua Umum
                            </span>
                            <span className="font-semibold text-gray-300">Feb 2023 - Feb 2024</span>
                        </li>
                        <li className="flex justify-between">
                            <span>
                                <span className="font-semibold text-gray-300">Unit Kegiatan Mahasiswa Bidang Seni Musik ITERA</span><br />
                                Kepala Departemen Eksternal
                            </span>
                            <span className="font-semibold text-gray-300">Feb 2022 - Feb 2023</span>
                        </li>
                        <li className="flex justify-between">
                            <span>
                                <span className="font-semibold text-gray-300">Himpunan Mahasiswa Teknik Informatika ITERA</span><br />
                                Staff Magang M-Rakyat HMIF
                            </span>
                            <span className="font-semibold text-gray-300">Jul 2022</span>
                        </li>
                        <li className="flex justify-between">
                            <span>
                                <span className="font-semibold text-gray-300">Himpunan Mahasiswa Teknik Informatika ITERA</span><br />
                                Ketua Pelaksana Funcoastic HMEI
                            </span>
                            <span className="font-semibold text-gray-300">Jun 2022</span>
                        </li>
                    </ul>
                </div>
                
                {/* Training And Certification */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">TRAINING AND CERTIFICATION</h3>
                    <ul className="mt-2 text-gray-300">
                        <li className="flex justify-between">
                            <span>Certified WebGIS Developer</span>
                            <span>ESRI (2024)</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Laravel & React Full-Stack Development</span>
                            <span>Udemy (2023)</span>
                        </li>
                    </ul>
                </div>

                {/* Publication */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">PUBLICATION</h3>
                    <ul className="mt-2 text-gray-300">
                        <li className="flex justify-between">
                            <span>"WebGIS-Based Heavy Equipment Tracking"</span>
                            <span>ITERA Journal (2025)</span>
                        </li>
                        <li className="flex justify-between">
                            <span>"Optimizing Agile LSD for Geospatial Data"</span>
                            <span>National Conference (2024)</span>
                        </li>
                    </ul>
                </div>

                {/* Languages */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">LANGUAGES</h3>
                    <ul className="mt-2 text-gray-300">
                        <li className="flex justify-between">
                            <span>English</span>
                            <span>Intermediate (TOEFL Prediction Test score xxx)</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Indonesian</span>
                            <span>Native</span>
                        </li>
                    </ul>
                </div>

                {/* Skills */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">SKILLS</h3>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full border-collapse border border-gray-800 text-gray-300">
                            <thead>
                                <tr className="bg-gray-800">
                                    <th className="border border-gray-600 px-4 py-2">Hard Skill</th>
                                    <th className="border border-gray-600 px-4 py-2">Soft Skill</th>
                                    <th className="border border-gray-600 px-4 py-2">Measurement Unit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-600 px-4 py-2">
                                        <span className="font-semibold">Advance in:</span>
                                        <ul className="list-disc list-inside">
                                            <li>WebGIS Development (Laravel, Leaflet, OpenLayers)</li>
                                            <li>Full-Stack Web Development (Laravel, React, PostgreSQL, Tailwind CSS)</li>
                                        </ul>
                                        <span className="font-semibold">Intermediate in:</span>
                                        <ul className="list-disc list-inside">
                                            <li>Geospatial Data Processing</li>
                                            <li>Graphic Design & Video Editing</li>
                                        </ul>
                                    </td>
                                    <td className="border border-gray-600 px-4 py-2">
                                        <ul className="list-disc list-inside">
                                            <li>Leadership</li>
                                            <li>Teamwork</li>
                                            <li>Communication</li>
                                            <li>Adaptability</li>
                                            <li>Hard worker & Persistence</li>
                                        </ul>
                                    </td>
                                    <td className="border border-gray-600 px-4 py-2">
                                        <ul className="list-disc list-inside">
                                            <li>Project Experience</li>
                                            <li>Problem-Solving Ability</li>
                                            <li>Certifications</li>
                                            <li>Team Collaboration</li>
                                            <li>Self-Learning Initiative</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* End of resume */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2"></h3>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 text-center text-gray-400">
                    <p className="flex justify-center items-center gap-1">
                        <IconCopyright size={16} /> {new Date().getFullYear()} <span className="text-purple-900 font-semibold hover:text-purple-700"><a href="/">CobraDev</a></span> All Rights Reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
