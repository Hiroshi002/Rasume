import {
  Gamepad2,
  Music,
  Box,
  Code,
  Facebook,
  Github,
  Youtube,
  Instagram,
  Book,
  Sword,
  Star,
  Trophy,
  Disc,
  Radio,
  Mic2,
  Cpu,
  FolderCode,
  Lightbulb,
  BookOpen,
  GraduationCap,
  PencilLine,
  Languages,
  Layout,
  Database,
  Briefcase,
  Target,
} from "lucide-react";
import React from "react";

export const resumeConfig = {
  // ==========================================
  // 1. ข้อมูลส่วนตัว (Profile)
  // ==========================================
  profile: {
    name: "Krma", // ชื่อที่แสดงในหน้าเว็บ
    role: "Developer Engineering", // ตำแหน่งงานหลัก
    image: "https://img5.pic.in.th/file/secure-sv1/1000094579.png", // URL รูปโปรไฟล์
    bio: "A dedicated [Sophomore/Junior] Computer Engineering student with over [7-8] years of hands-on experience in software development. Proficient in a comprehensive tech stack, ranging from Backend Infrastructure (Node.js, Python, Lua) to Frontend Experience (React, Next.js, TypeScript). Developed a strong logical foundation and engineering mindset through early exposure to Java and C# since middle school. I am eager to leverage my technical expertise and problem-solving skills to build scalable solutions and contribute to a fast-paced professional team.", // คำแนะนำตัวสั้นๆ
    philosophy: "Turning complex logic into elegant, high-performance digital experiences.", // คติประจำใจหรือปรัชญาการทำงาน
  },

  // ==========================================
  // 2. ข้อมูลติดต่อ (Contact)
  // ==========================================
  contact: {
    phone: "(+66)64-869-9195", // เบอร์โทรศัพท์ที่แสดงผล
    phoneHref: "tel:+66648699195", // ลิงก์สำหรับกดโทรออก
    location: "Chiang Rai, Phan", // ที่อยู่หรือจังหวัด
    email: "krmamusicnightcore@gmail.com", // อีเมลที่แสดงผล
    emailHref: "mailto:krmamusicnightcore@gmail.com", // ลิงก์สำหรับกดส่งอีเมล
    codepen: "codepen.io/OS-KILLER-FF", // ชื่อบัญชี CodePen
    codepenHref: "https://codepen.io/OS-KILLER-FF", // ลิงก์ไปยังหน้าโปรไฟล์ CodePen
  },

  // ==========================================
  // 3. โซเชียลมีเดีย (Socials)
  // ==========================================
  socials: [
    {
      name: "Facebook", // ชื่อโซเชียล
      href: "https://www.facebook.com/chanon.yodwong.469798", // ลิงก์ไปยังหน้าโปรไฟล์
      icon: <Facebook size={20} />, // ไอคอนที่ใช้
    },
    {
      name: "Github",
      href: "https://github.com/Hiroshi002",
      icon: <Github size={20} />,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@KrmaNightcore",
      icon: <Youtube size={20} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/callmex_ff/",
      icon: <Instagram size={20} />,
    },
  ],

  // ==========================================
  // 4. สถิติภาพรวม (Quick Stats) - แสดงที่หน้าแรก
  // ==========================================
  stats: [
    { 
      label: "Experience", // หัวข้อสถิติ
      value: "8+", // ค่าตัวเลข/ข้อความที่ต้องการเน้น
      unit: "Years", // หน่วยของสถิติ
      icon: <Briefcase size={20} /> // ไอคอนประกอบ
    },
    { label: "Projects", value: "5+", unit: "Completed", icon: <FolderCode size={20} /> },
    { label: "Skills", value: "20+", unit: "Mastered", icon: <Star size={20} /> },
    { label: "Languages", value: "3", unit: "Fluent", icon: <Languages size={20} /> },
  ],

  // ==========================================
  // 5. ทักษะการเขียนโปรแกรม (Programming Skills)
  // ==========================================
  frontendSkills: [
    { 
      name: "HTML5 & PUG", // ชื่อภาษา/เครื่องมือ
      level: 75, // ระดับความเชี่ยวชาญ (0-100)
      color: "from-orange-400 to-orange-600" // สี Gradient (Tailwind Class)
    },
    { name: "CSS3 & SASS", level: 70, color: "from-blue-400 to-blue-600" },
    {
      name: "JavaScript (ES6+)",
      level: 80,
      color: "from-yellow-400 to-yellow-600",
    },
    { name: "TypeScript", level: 65, color: "from-blue-500 to-indigo-600" },
    { name: "React / Next.js", level: 60, color: "from-cyan-400 to-blue-500" },
    { name: "Tailwind CSS", level: 75, color: "from-teal-400 to-cyan-500" },
  ],

  backendSkills: [
    { name: "NodeJS", level: 90, color: "from-green-400 to-green-600" },
    { name: "Python", level: 95, color: "from-blue-600 to-yellow-400" },
    { name: "Lua", level: 88, color: "from-blue-400 to-blue-900" },
    { name: "PHP", level: 82, color: "from-purple-500 to-purple-700" },
    {
      name: "SQL (MySQL/PostgreSQL)",
      level: 85,
      color: "from-blue-700 to-indigo-800",
    },
    { name: "MongoDB", level: 78, color: "from-green-500 to-emerald-700" },
    { name: "Java", level: 70, color: "from-red-500 to-orange-600" },
    { name: "C# / .NET", level: 72, color: "from-purple-600 to-indigo-700" },
  ],

  // ==========================================
  // 6. ทักษะด้านซอฟต์แวร์ (Software Skills)
  // ==========================================
  softwareSkills: [
    { 
      name: "VS Code", // ชื่อโปรแกรม
      level: 95, // ระดับความเชี่ยวชาญ (0-100)
      color: "#007ACC" // สีหลักของโปรแกรม (Hex Code)
    },
    { name: "Adobe Photoshop", level: 85, color: "#31A8FF" },
    { name: "Adobe After Effects", level: 80, color: "#CF96FD" },
    { name: "Adobe Premiere Pro", level: 82, color: "#9999FF" },
    { name: "Blender (3D Modeling)", level: 75, color: "#EA7600" },
  ],

  // ==========================================
  // 7. สิ่งที่สนใจ (Interests) - เมนูนำทางหน้าแรก
  // ==========================================
  interests: [
    { 
      name: "Gaming", // ชื่อหัวข้อที่สนใจ
      icon: <Gamepad2 size={24} />, // ไอคอนที่ใช้
      href: "/gaming" // ลิงก์ไปยังหน้าย่อย
    },
    { name: "Music", icon: <Music size={24} />, href: "/music" },
    { name: "Coding", icon: <Code size={24} />, href: "/coding" },
    { name: "Learning", icon: <Book size={24} />, href: "/learning" },
  ],

  // ==========================================
  // 8. ประสบการณ์การทำงาน (Work Experience)
  // ==========================================
  experience: [
    {
      company: "Freelance Developer", // ชื่อบริษัทหรือสถานที่ทำงาน
      role: "Fullstack Developer", // ตำแหน่งงาน
      period: "2024 - Present", // ช่วงเวลาที่ทำงาน
      description: "Developing custom web applications and backend systems for various clients using Node.js, React, and Python.", // รายละเอียดงาน
      icon: <Code size={20} />, // ไอคอนประกอบ
    },
    {
      company: "Tech Solutions Co.",
      role: "Backend Intern",
      period: "2024 - Present",
      description: "Assisted in building scalable API services and database optimization using PostgreSQL and Node.js.",
      icon: <Cpu size={20} />,
    },
  ],

  // ==========================================
  // 9. การศึกษา (Education)
  // ==========================================
  education: [
    {
      school: "Chiang Rai Rajabhat University", // ชื่อสถานศึกษา
      degree: "Bachelor of Computer Engineering", // ระดับการศึกษา/สาขาวิชา
      period: "2024 - Present", // ปีที่ศึกษา
      description: "Focused on Software Engineering, Data Structures, and Database Management Systems.", // รายละเอียดการศึกษา
      icon: <GraduationCap size={20} />, // ไอคอนประกอบ
    },
    {
      school: "Nakornwittayakhom School",
      degree: "High School Diploma (Science-Math)",
      period: "2017 - 2023",
      description: "Strong foundation in mathematics and logic-based problem solving.",
      icon: <BookOpen size={20} />,
    },
    {
      school: "Online Certifications",
      degree: "Learning enhance your skills and advance",
      period: "Present",
      description: "Flexible learning opportunities to enhance your skills and advance your career, with options available from various reputable institutions",
      icon: <BookOpen size={20} />,
    },
  ],

  // ==========================================
  // 10. สิ่งที่กำลังโฟกัส (Current Focus) - แสดงที่ Sidebar หน้าแรก
  // ==========================================
  currentFocus: [
    {
      title: "Next.js Mastery", // สิ่งที่กำลังศึกษาหรือโฟกัส
      description: "Deep diving into App Router and Server Components.", // รายละเอียดเพิ่มเติม
      progress: 75, // ความคืบหน้า (0-100)
      icon: <Target className="text-blue-400" size={18} />, // ไอคอนประกอบ
    },
    {
      title: "UI/UX Design",
      description: "Learning advanced animation techniques with Framer Motion.",
      progress: 60,
      icon: <PencilLine className="text-purple-400" size={18} />,
    },
    {
      title: "Japanese N4",
      description: "Practicing grammar and vocabulary for N4 level.",
      progress: 40,
      icon: <Languages className="text-rose-400" size={18} />,
    },
  ],

  // ==========================================
  // 11. ข้อมูลหน้า Gaming (Gaming Page)
  // ==========================================
  gamingPage: {
    title: "Gaming Life", // หัวข้อหลักของหน้า
    subtitle: "Exploring digital realms and mastering competitive strategies", // คำอธิบายหน้า
    games: [
      {
        name: "ROV (Arena of Valor)", // ชื่อเกม
        genre: "MOBA", // แนวเกม
        style: "ALL Lane / Strategic", // สไตล์การเล่น
        icon: <Sword className="text-rose-400" />, // ไอคอนประจำเกม
        rating: 5, // คะแนนความชอบ (0-5 ดาว)
      },
      {
        name: "Mobile Legends",
        genre: "MOBA",
        style: "Mid Lane / Carry",
        icon: <Star className="text-orange-400" />,
        rating: 4,
      },
      {
        name: "Genshin Impact",
        genre: "Open World RPG",
        style: "Explorer / Theorycrafting",
        icon: <Trophy className="text-amber-400" />,
        rating: 4,
      },
      {
        name: "Minecraft",
        genre: "Sandbox",
        style: "Technical / Mods / RP",
        icon: <Box className="text-emerald-400" />,
        rating: 5,
      },
    ],
  },

  // ==========================================
  // 12. ข้อมูลหน้า Music (Music Page)
  // ==========================================
  musicPage: {
    title: "Favorite Music", // หัวข้อหลักของหน้า
    subtitle: "My favorite genres and top tracks", // คำอธิบายหน้า
    genres: [
      { 
        name: "Nightcore", // ชื่อแนวเพลง
        icon: <Disc className="text-purple-500" /> // ไอคอนแนวเพลง
      },
      { name: "Lo-fi / Chill", icon: <Radio className="text-blue-500" /> },
      { name: "J-Pop", icon: <Mic2 className="text-rose-500" /> },
    ],
    tracks: [
      {
        name: "Best Nightcore Rock Covers Mix 2025 🎸", // ชื่อเพลง
        artist: "Kenka", // ชื่อศิลปิน
        genre: "Nightcore", // แนวเพลง
        audioUrl: "https://youtu.be/jCFML7BDKsQ?si=p0G0ENshixMVQvg8", // ลิงก์เพลง (YouTube/Spotify)
      },
      {
        name: "Nightcore - Rockstar",
        artist: "Post Malone",
        genre: "Nightcore",
        audioUrl: "https://youtu.be/a8TtlHfEJck?si=vl3VU98CRivHuU-g",
      },
      {
        name: "YOASOBI PLAYLIST",
        artist: "YOASOBI",
        genre: "J-Pop",
        audioUrl: "https://youtu.be/ZyfRUPPdNUg?si=G2e08QmhLjnWvV9E",
      },
      {
        name: "Less talk.... more action. / Lo-fi for study, work ( with Rain sounds)",
        artist: "chill chill journal",
        genre: "LO-FI",
        audioUrl: "https://youtu.be/9kzE8isXlQY?si=sApOCqRNuzH1R_Fp",
      },
    ],
  },

  // ==========================================
  // 13. ข้อมูลหน้า Coding (Coding Page)
  // ==========================================
  codingPage: {
    title: "Coding Projects", // หัวข้อหลัก
    subtitle: "Architecting robust solutions and innovative digital experiences", // คำอธิบายหน้า
    projects: [], // รายการโปรเจกต์ (ยังไม่ได้ใส่ข้อมูล)
  },

  // ==========================================
  // 14. ข้อมูลหน้า Learning (Learning Page)
  // ==========================================
  learningPage: {
    title: "Self Learning", // หัวข้อหลัก
    subtitle: "Tracking my progress in new technologies and languages", // คำอธิบายหน้า
    sections: [
      {
        title: "Frontend Development", // หัวข้อส่วนการเรียนรู้
        skills: [
          {
            name: "HTML5 & PUG", // ชื่อสิ่งที่เรียน
            progress: 75, // ความคืบหน้า (0-100)
            icon: <Layout className="text-orange-500" />, // ไอคอนประกอบ
          },
          {
            name: "CSS3 & SASS",
            progress: 70,
            icon: <Layout className="text-blue-500" />,
          },
          {
            name: "JavaScript (ES6+)",
            progress: 80,
            icon: <Layout className="text-yellow-500" />,
          },
          {
            name: "TypeScript",
            progress: 65,
            icon: <Layout className="text-blue-600" />,
          },
          {
            name: "React / Next.js",
            progress: 60,
            icon: <Layout className="text-cyan-400" />,
          },
          {
            name: "Tailwind CSS",
            progress: 75,
            icon: <Layout className="text-teal-400" />,
          },
        ],
      },
      {
        title: "Backend Development",
        skills: [
          {
            name: "NodeJS",
            progress: 90,
            icon: <Database className="text-green-500" />,
          },
          {
            name: "Python",
            progress: 95,
            icon: <Database className="text-blue-600" />,
          },
          {
            name: "Lua",
            progress: 88,
            icon: <Database className="text-blue-400" />,
          },
          {
            name: "PHP",
            progress: 82,
            icon: <Database className="text-purple-500" />,
          },
          {
            name: "SQL (MySQL/PostgreSQL)",
            progress: 85,
            icon: <Database className="text-blue-700" />,
          },
          {
            name: "MongoDB",
            progress: 78,
            icon: <Database className="text-green-600" />,
          },
          {
            name: "Java",
            progress: 70,
            icon: <Database className="text-red-500" />,
          },
          {
            name: "C# / .NET",
            progress: 72,
            icon: <Database className="text-purple-600" />,
          },
        ],
      },
      {
        title: "Languages",
        skills: [
          {
            name: "Japanese (N5-N4 Level)",
            progress: 40,
            icon: <Languages className="text-rose-500" />,
          },
          {
            name: "English (Communication)",
            progress: 65,
            icon: <Languages className="text-blue-500" />,
          },
        ],
      },
    ],
  },

  // ==========================================
  // 15. ตั้งค่าเพลงพื้นหลัง (Background Music Settings)
  // ==========================================
  musicConfig: {
    url: "/music/Nightcore - Umbrella (Rock Version) (Lyrics).mp3", // ลิงก์ไฟล์เพลง (อ้างอิงจากโฟลเดอร์ public)
    volume: 0.02, // ระดับเสียงเริ่มต้น (0.01 - 1.0) แนะนำ 0.02 (2%)
    autoplayOnInteraction: true, // ให้เล่นอัตโนมัติเมื่อมีการขยับเมาส์หรือคลิก
    loop: true, // ให้เพลงเล่นวนซ้ำ
  },

  // 16. ตั้งค่า Metadata ของเว็บไซต์ (Site Metadata)
  siteMetadata: {
    title: "My Resume Code By Krma", // ชื่อที่แสดงบนแท็บ Browser
    description: "Personal Resume Website", // คำอธิบายเว็บไซต์
    favicon: "/favicon.ico", // พาธของรูปไอคอน (วางไว้ในโฟลเดอร์ public)
  },
};
