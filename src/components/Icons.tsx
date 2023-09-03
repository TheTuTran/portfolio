import { LucideProps } from "lucide-react";
import {
  FaJs,
  FaPython,
  FaJava,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaCss3Alt,
  FaDatabase,
  FaAws,
  FaFire,
  FaServer,
  FaTools,
  FaHtml5,
  FaCode,
  FaRProject,
  FaCoffee,
  FaTree,
} from "react-icons/fa";
import {
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSupabase,
  SiCplusplus,
  SiGooglecloud,
  SiSqlite,
  SiJest,
  SiJunit5,
  SiPrisma,
} from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";
import { VscDebugAll } from "react-icons/vsc";

export const Icons = {
  Languages: ({ className }: LucideProps) => <FaCode className={className} />,
  "Frontend Frameworks": ({ className }: LucideProps) => (
    <FaReact className={className} />
  ),
  "Backend Frameworks": ({ className }: LucideProps) => (
    <FaServer className={className} />
  ),

  "Frontend Libraries": ({ className }: LucideProps) => (
    <FaVuejs className={className} />
  ),

  Database: ({ className }: LucideProps) => (
    <FaDatabase className={className} />
  ),
  DevTools: ({ className }: LucideProps) => <FaTools className={className} />,

  Testing: ({ className }: LucideProps) => (
    <VscDebugAll className={className} />
  ),
  JavaScript: ({ className }: LucideProps) => <FaJs className={className} />,
  TypeScript: ({ className }: LucideProps) => (
    <SiTypescript className={className} />
  ),
  Python: ({ className }: LucideProps) => <FaPython className={className} />,
  Java: ({ className }: LucideProps) => <FaJava className={className} />,

  Cplusplus: ({ className }: LucideProps) => (
    <SiCplusplus className={className} />
  ),
  R: ({ className }: LucideProps) => <FaRProject className={className} />,
  HTML: ({ className }: LucideProps) => <FaHtml5 className={className} />,
  CSS: ({ className }: LucideProps) => <FaCss3Alt className={className} />,
  React: ({ className }: LucideProps) => <FaReact className={className} />,
  "Vue.js": ({ className }: LucideProps) => <FaVuejs className={className} />,
  "Node.js": ({ className }: LucideProps) => <FaNodeJs className={className} />,
  jQuery: ({ className }: LucideProps) => (
    <BiLogoJquery className={className} />
  ),
  TailwindCSS: ({ className }: LucideProps) => (
    <SiTailwindcss className={className} />
  ),
  "styled-components": ({ className }: LucideProps) => (
    <SiStyledcomponents className={className} />
  ),
  PostgreSQL: ({ className }: LucideProps) => (
    <SiPostgresql className={className} />
  ),
  MySQL: ({ className }: LucideProps) => <SiMysql className={className} />,
  SQLite: ({ className }: LucideProps) => <SiSqlite className={className} />,
  MongoDB: ({ className }: LucideProps) => <SiMongodb className={className} />,
  Redis: ({ className }: LucideProps) => <SiRedis className={className} />,
  Firebase: ({ className }: LucideProps) => <FaFire className={className} />,
  Supabase: ({ className }: LucideProps) => (
    <SiSupabase className={className} />
  ),
  PrismaDB: ({ className }: LucideProps) => <SiPrisma className={className} />,
  AWS: ({ className }: LucideProps) => <FaAws className={className} />,
  "Google Cloud Platform": ({ className }: LucideProps) => (
    <SiGooglecloud className={className} />
  ),
  Jest: ({ className }: LucideProps) => <SiJest className={className} />,
  Mocha: ({ className }: LucideProps) => <FaCoffee className={className} />,
  JUnit: ({ className }: LucideProps) => <SiJunit5 className={className} />,
  Cypress: ({ className }: LucideProps) => <FaTree className={className} />,
};
