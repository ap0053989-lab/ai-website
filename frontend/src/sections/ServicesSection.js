// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';

// const ServicesSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const navigate = useNavigate();
//   const [hoveredService, setHoveredService] = useState(null);
  
//   // Color scheme
//   const telemagenta = '#cf3476';
//   const salmon = '#fa8072';
//   const white = '#ffffff';

//   const handleExploreServices = () => {
//     navigate('/services');
//   };

//   // Service data with minimal content
//   const services = [
//     { id: 1, name: 'STRATEGY', char: 'S' },
//     { id: 2, name: 'DEVELOPMENT', char: 'D' },
//     { id: 3, name: 'VISION', char: 'V' },
//     { id: 4, name: 'INTEGRATION', char: 'I' },
//     { id: 5, name: 'TRAINING', char: 'T' },
//     { id: 6, name: 'INNOVATION', char: 'I' },
//   ];

//   // Matrix rain animation
//   const MatrixRain = () => {
//     const columns = 20;
//     return (
//       <Box sx={{ 
//         position: 'absolute', 
//         top: 0, 
//         left: 0, 
//         right: 0, 
//         bottom: 0,
//         overflow: 'hidden',
//         opacity: 0.1
//       }}>
//         {[...Array(columns)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ y: '-100%' }}
//             animate={{ y: '200%' }}
//             transition={{
//               duration: Math.random() * 5 + 3,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//               ease: "linear"
//             }}
//             style={{
//               position: 'absolute',
//               left: `${(i * 100) / columns}%`,
//               fontSize: '20px',
//               color: i % 2 === 0 ? telemagenta : salmon,
//               fontFamily: 'monospace',
//               writingMode: 'vertical-rl',
//               textOrientation: 'mixed',
//               whiteSpace: 'nowrap'
//             }}
//           >
//             {[...Array(30)].map((_, j) => (
//               <span key={j} style={{ 
//                 opacity: Math.random(),
//                 color: Math.random() > 0.7 ? telemagenta : salmon 
//               }}>
//                 {String.fromCharCode(0x30A0 + Math.random() * 96)}
//               </span>
//             ))}
//           </motion.div>
//         ))}
//       </Box>
//     );
//   };

//   // Holographic effect for letters
//   const HolographicLetter = ({ char, isHovered }) => (
//     <motion.div
//       initial={{ scale: 0, opacity: 0 }}
//       animate={{ 
//         scale: isHovered ? 2 : 1,
//         opacity: 1,
//         textShadow: isHovered 
//           ? [
//               `0 0 5px ${telemagenta}`,
//               `0 0 20px ${telemagenta}`,
//               `0 0 40px ${salmon}`
//             ]
//           : `0 0 10px ${telemagenta}`
//       }}
//       transition={{
//         scale: { type: "spring", stiffness: 200 },
//         textShadow: { duration: 0.5 }
//       }}
//       style={{
//         fontSize: '8rem',
//         fontWeight: 900,
//         background: `linear-gradient(45deg, ${telemagenta}, ${salmon})`,
//         WebkitBackgroundClip: 'text',
//         WebkitTextFillColor: 'transparent',
//         backgroundClip: 'text',
//         position: 'relative',
//       }}
//     >
//       {char}
//       {/* Holographic glow */}
//       {isHovered && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '100%',
//             height: '100%',
//             background: `radial-gradient(circle, ${telemagenta}30, transparent 70%)`,
//             filter: 'blur(20px)',
//             zIndex: -1
//           }}
//         />
//       )}
//     </motion.div>
//   );

//   // Quantum particle simulation
//   const QuantumParticles = () => {
//     const particles = 50;
    
//     return (
//       <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
//         {[...Array(particles)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{
//               x: Math.random() * 100,
//               y: Math.random() * 100,
//               scale: 0
//             }}
//             animate={{
//               x: [
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100,
//               ],
//               y: [
//                 Math.random() * 100,
//                 Math.random() * 100,
//                 Math.random() * 100,
//               ],
//               scale: [0, 1, 0],
//               opacity: [0, 1, 0]
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: i * 0.1,
//               times: [0, 0.5, 1]
//             }}
//             style={{
//               position: 'absolute',
//               width: '3px',
//               height: '3px',
//               borderRadius: '50%',
//               background: `radial-gradient(circle, ${
//                 Math.random() > 0.5 ? telemagenta : salmon
//               }, transparent)`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </Box>
//     );
//   };

//   // Neural network lines animation
//   const NeuralNetwork = () => {
//     const nodes = 8;
//     const centerX = 50;
//     const centerY = 50;
    
//     return (
//       <svg
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           overflow: 'visible',
//         }}
//       >
//         {[...Array(nodes)].map((_, i) => {
//           const angle = (i * 2 * Math.PI) / nodes;
//           const radius = 40;
//           const x = centerX + radius * Math.cos(angle);
//           const y = centerY + radius * Math.sin(angle);
          
//           return (
//             <g key={i}>
//               {/* Connection lines */}
//               <motion.line
//                 x1={`${centerX}%`}
//                 y1={`${centerY}%`}
//                 x2={`${x}%`}
//                 y2={`${y}%`}
//                 stroke={`url(#neuralGradient-${i})`}
//                 strokeWidth="1"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{
//                   duration: 2,
//                   delay: i * 0.2,
//                   repeat: Infinity,
//                   repeatType: "reverse"
//                 }}
//               />
              
//               {/* Pulsing nodes */}
//               <motion.circle
//                 cx={`${x}%`}
//                 cy={`${y}%`}
//                 r="8"
//                 fill={i % 2 === 0 ? telemagenta : salmon}
//                 initial={{ scale: 0 }}
//                 animate={{ 
//                   scale: [1, 1.5, 1],
//                   opacity: [0.5, 1, 0.5]
//                 }}
//                 transition={{
//                   duration: 2,
//                   delay: i * 0.3,
//                   repeat: Infinity,
//                 }}
//               />
              
//               {/* Data flow particles */}
//               <motion.circle
//                 cx={`${x}%`}
//                 cy={`${y}%`}
//                 r="2"
//                 fill={i % 2 === 0 ? salmon : telemagenta}
//                 initial={{ scale: 0 }}
//                 animate={{ 
//                   scale: [0, 1, 0],
//                   cx: [`${x}%`, `${centerX}%`, `${x}%`],
//                   cy: [`${y}%`, `${centerY}%`, `${y}%`]
//                 }}
//                 transition={{
//                   duration: 3,
//                   delay: i * 0.5,
//                   repeat: Infinity,
//                   repeatDelay: 1
//                 }}
//               />
//             </g>
//           );
//         })}
        
//         {/* Center node */}
//         <motion.circle
//           cx={`${centerX}%`}
//           cy={`${centerY}%`}
//           r="15"
//           fill={`url(#centerGlow)`}
//           animate={{ 
//             scale: [1, 1.2, 1],
//             filter: ['blur(0px)', 'blur(5px)', 'blur(0px)']
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity
//           }}
//         />
        
//         <defs>
//           <linearGradient id="centerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor={telemagenta} />
//             <stop offset="100%" stopColor={salmon} />
//           </linearGradient>
//           {[...Array(8)].map((_, i) => (
//             <linearGradient key={i} id={`neuralGradient-${i}`}>
//               <stop offset="0%" stopColor={telemagenta} stopOpacity="0.5" />
//               <stop offset="100%" stopColor={salmon} stopOpacity="0.5" />
//             </linearGradient>
//           ))}
//         </defs>
//       </svg>
//     );
//   };

//   return (
//     <Box ref={ref} sx={{
//       py: { xs: 10, md: 15 },
//       backgroundColor: '#000',
//       position: 'relative',
//       overflow: 'hidden',
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//     }}>
      
//       {/* Background Effects */}
//       <MatrixRain />
//       <QuantumParticles />
      
//       {/* Animated Grid */}
//       <motion.div
//         animate={inView ? {
//           backgroundPosition: ['0% 0%', '100% 100%'],
//         } : {}}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           repeatType: "reverse"
//         }}
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: `
//             linear-gradient(${telemagenta}10 1px, transparent 1px),
//             linear-gradient(90deg, ${telemagenta}10 1px, transparent 1px),
//             linear-gradient(${salmon}05 2px, transparent 2px),
//             linear-gradient(90deg, ${salmon}05 2px, transparent 2px)
//           `,
//           backgroundSize: '100px 100px, 100px 100px, 200px 200px, 200px 200px',
//           opacity: 0.2,
//         }}
//       />
      
//       {/* Warp field effect */}
//       <motion.div
//         animate={inView ? {
//           scale: [1, 1.2, 1],
//           rotate: 360,
//         } : {}}
//         transition={{
//           scale: {
//             duration: 4,
//             repeat: Infinity,
//           },
//           rotate: {
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }
//         }}
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: '600px',
//           height: '600px',
//           borderRadius: '50%',
//           border: `2px solid ${telemagenta}30`,
//           borderTopColor: `${salmon}50`,
//           borderRightColor: `${telemagenta}50`,
//           filter: 'blur(1px)',
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//         <Box sx={{ 
//           textAlign: 'center',
//           position: 'relative',
//           minHeight: '80vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center'
//         }}>
          
//           {/* Neural Network Visualization */}
//           <Box sx={{ 
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '60%',
//             height: '60%',
//             opacity: 0.3
//           }}>
//             <NeuralNetwork />
//           </Box>
          
//           {/* Main Title with Holographic Effect */}
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1 }}
//             style={{ marginBottom: '4rem' }}
//           >
//             <Typography
//               variant="h1"
//               sx={{
//                 fontSize: { xs: '2.5rem', md: '4rem', lg: '6rem' },
//                 fontWeight: 900,
//                 color: white,
//                 letterSpacing: '0.2em',
//                 textTransform: 'uppercase',
//                 position: 'relative',
//                 '&::after': {
//                   content: '""',
//                   position: 'absolute',
//                   bottom: '-20px',
//                   left: '50%',
//                   transform: 'translateX(-50%)',
//                   width: '300px',
//                   height: '3px',
//                   background: `linear-gradient(90deg, transparent, ${telemagenta}, ${salmon}, transparent)`,
//                   animation: 'pulseWidth 3s infinite alternate',
//                 },
//                 '@keyframes pulseWidth': {
//                   '0%': { width: '200px' },
//                   '100%': { width: '400px' },
//                 }
//               }}
//             >
//               AI SERVICES
//             </Typography>
            
//             {/* Subtitle with glitch effect */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : {}}
//               transition={{ delay: 0.5 }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: salmon,
//                   fontWeight: 300,
//                   letterSpacing: '0.5em',
//                   textTransform: 'uppercase',
//                   marginTop: '4rem',
//                   position: 'relative',
//                   '&::before': {
//                     content: 'attr(data-text)',
//                     position: 'absolute',
//                     left: 0,
//                     textShadow: `2px 0 ${telemagenta}`,
//                     animation: 'glitch 3s infinite linear alternate-reverse',
//                   },
//                   '@keyframes glitch': {
//                     '0%': { clipPath: 'inset(0 0 0 0)' },
//                     '20%': { clipPath: 'inset(10% 0 20% 0)' },
//                     '40%': { clipPath: 'inset(40% 0 5% 0)' },
//                     '60%': { clipPath: 'inset(80% 0 10% 0)' },
//                     '80%': { clipPath: 'inset(20% 0 50% 0)' },
//                     '100%': { clipPath: 'inset(0 0 0 0)' },
//                   }
//                 }}
//                 data-text="DIGITAL TRANSFORMATION"
//               >
//                 DIGITAL TRANSFORMATION
//               </Typography>
//             </motion.div>
//           </motion.div>
          
//           {/* Circular Service Menu */}
//           <Box sx={{ 
//             position: 'relative',
//             width: '500px',
//             height: '500px',
//             margin: '4rem auto',
//           }}>
//             {/* Center Holographic Display */}
//             <motion.div
//               animate={{
//                 rotate: 360,
//                 scale: [1, 1.05, 1],
//               }}
//               transition={{
//                 rotate: {
//                   duration: 40,
//                   repeat: Infinity,
//                   ease: "linear"
//                 },
//                 scale: {
//                   duration: 3,
//                   repeat: Infinity,
//                   repeatType: "reverse"
//                 }
//               }}
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 width: '200px',
//                 height: '200px',
//                 borderRadius: '50%',
//                 background: `conic-gradient(from 0deg, ${telemagenta}, ${salmon}, ${telemagenta})`,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 cursor: 'pointer',
//                 filter: 'blur(1px)',
//               }}
//             >
//               <Box sx={{
//                 width: '180px',
//                 height: '180px',
//                 borderRadius: '50%',
//                 background: '#000',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 position: 'relative',
//                 overflow: 'hidden',
//               }}>
//                 <motion.div
//                   animate={{ 
//                     rotate: -360,
//                     scale: [1, 1.1, 1],
//                   }}
//                   transition={{
//                     rotate: {
//                       duration: 20,
//                       repeat: Infinity,
//                       ease: "linear"
//                     },
//                     scale: {
//                       duration: 2,
//                       repeat: Infinity,
//                     }
//                   }}
//                   style={{
//                     fontSize: '4rem',
//                     fontWeight: 900,
//                     background: `linear-gradient(45deg, ${telemagenta}, ${salmon})`,
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}
//                 >
//                   AI
//                 </motion.div>
//               </Box>
//             </motion.div>
            
//             {/* Service Nodes in Orbit */}
//             {services.map((service, index) => {
//               const angle = (index * 60) * Math.PI / 180;
//               const radius = 200;
//               const x = Math.cos(angle) * radius;
//               const y = Math.sin(angle) * radius;
              
//               return (
//                 <motion.div
//                   key={service.id}
//                   initial={{ x: 0, y: 0, scale: 0 }}
//                   animate={inView ? { 
//                     x, 
//                     y,
//                     scale: 1,
//                     rotate: [0, 360],
//                   } : {}}
//                   transition={{
//                     x: { delay: index * 0.2, type: "spring", stiffness: 100 },
//                     y: { delay: index * 0.2, type: "spring", stiffness: 100 },
//                     scale: { delay: index * 0.2 },
//                     rotate: {
//                       duration: 20 + index * 5,
//                       repeat: Infinity,
//                       ease: "linear",
//                       delay: index * 0.5
//                     }
//                   }}
//                   whileHover={{ 
//                     scale: 1.5,
//                     zIndex: 100,
//                     transition: { type: "spring", stiffness: 400 }
//                   }}
//                   onHoverStart={() => setHoveredService(service.id)}
//                   onHoverEnd={() => setHoveredService(null)}
//                   style={{
//                     position: 'absolute',
//                     left: '50%',
//                     top: '50%',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   <Box sx={{
//                     transform: 'translate(-50%, -50%)',
//                     textAlign: 'center',
//                   }}>
//                     <HolographicLetter 
//                       char={service.char} 
//                       isHovered={hoveredService === service.id}
//                     />
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ 
//                         opacity: hoveredService === service.id ? 1 : 0,
//                         y: hoveredService === service.id ? 0 : 10
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           color: white,
//                           fontWeight: 600,
//                           fontSize: '0.8rem',
//                           textTransform: 'uppercase',
//                           letterSpacing: '2px',
//                           marginTop: '1rem',
//                           background: `linear-gradient(90deg, ${telemagenta}, ${salmon})`,
//                           WebkitBackgroundClip: 'text',
//                           WebkitTextFillColor: 'transparent',
//                         }}
//                       >
//                         {service.name}
//                       </Typography>
//                     </motion.div>
                    
//                     {/* Connection line to center */}
//                     <motion.div
//                       initial={{ scaleX: 0 }}
//                       animate={{ scaleX: hoveredService === service.id ? 1 : 0 }}
//                       style={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '50%',
//                         width: `${radius}px`,
//                         height: '2px',
//                         background: `linear-gradient(90deg, ${service.id % 2 === 0 ? telemagenta : salmon}, transparent)`,
//                         transformOrigin: 'left center',
//                         zIndex: -1,
//                       }}
//                     />
//                   </Box>
//                 </motion.div>
//               );
//             })}
            
//             {/* Orbital rings */}
//             {[...Array(3)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 animate={{
//                   rotate: 360,
//                   scale: [1, 1 + i * 0.1, 1],
//                 }}
//                 transition={{
//                   rotate: {
//                     duration: 30 - i * 10,
//                     repeat: Infinity,
//                     ease: "linear"
//                   },
//                   scale: {
//                     duration: 3,
//                     repeat: Infinity,
//                   }
//                 }}
//                 style={{
//                   position: 'absolute',
//                   top: '50%',
//                   left: '50%',
//                   transform: 'translate(-50%, -50%)',
//                   width: `${300 + i * 100}px`,
//                   height: `${300 + i * 100}px`,
//                   borderRadius: '50%',
//                   border: `1px solid ${i % 2 === 0 ? telemagenta : salmon}${30 - i * 10}`,
//                   pointerEvents: 'none',
//                 }}
//               />
//             ))}
//           </Box>
          
//           {/* CTA Button with Quantum Effect */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 2 }}
//             style={{ marginTop: '4rem' }}
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button
//                 variant="contained"
//                 size="large"
//                 onClick={handleExploreServices}
//                 sx={{
//                   px: 8,
//                   py: 2.5,
//                   background: `linear-gradient(135deg, ${telemagenta}, ${salmon})`,
//                   color: white,
//                   fontWeight: 900,
//                   fontSize: '1.2rem',
//                   borderRadius: '50px',
//                   textTransform: 'uppercase',
//                   letterSpacing: '3px',
//                   position: 'relative',
//                   overflow: 'hidden',
//                   border: 'none',
//                   '&::before': {
//                     content: '""',
//                     position: 'absolute',
//                     top: '-2px',
//                     left: '-2px',
//                     right: '-2px',
//                     bottom: '-2px',
//                     background: `linear-gradient(45deg, ${telemagenta}, ${salmon}, ${telemagenta}, ${salmon})`,
//                     borderRadius: '52px',
//                     zIndex: -1,
//                     animation: 'rotate 2s linear infinite',
//                     backgroundSize: '400% 400%',
//                   },
//                   '@keyframes rotate': {
//                     '0%': { backgroundPosition: '0% 50%' },
//                     '50%': { backgroundPosition: '100% 50%' },
//                     '100%': { backgroundPosition: '0% 50%' },
//                   }
//                 }}
//               >
//                 <motion.span
//                   animate={{ 
//                     textShadow: [
//                       `0 0 5px ${telemagenta}`,
//                       `0 0 20px ${salmon}`,
//                       `0 0 5px ${telemagenta}`
//                     ]
//                   }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   INITIATE AI
//                 </motion.span>
//                 <motion.div
//                   animate={{ 
//                     x: [0, 10, 0],
//                     rotate: [0, 180, 360]
//                   }}
//                   transition={{ 
//                     duration: 2, 
//                     repeat: Infinity 
//                   }}
//                   style={{ marginLeft: '1rem' }}
//                 >
//                   <ArrowForwardIcon />
//                 </motion.div>
//               </Button>
//             </motion.div>
//           </motion.div>
//         </Box>
//       </Container>
      
//       {/* Data stream effect at bottom */}
//       <Box sx={{
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         height: '100px',
//         overflow: 'hidden',
//       }}>
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ x: '-100%' }}
//             animate={{ x: '200%' }}
//             transition={{
//               duration: Math.random() * 3 + 2,
//               repeat: Infinity,
//               delay: i * 0.1,
//               ease: "linear"
//             }}
//             style={{
//               position: 'absolute',
//               top: `${i * 5}px`,
//               width: '2px',
//               height: '50px',
//               background: `linear-gradient(transparent, ${
//                 Math.random() > 0.5 ? telemagenta : salmon
//               }, transparent)`,
//             }}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default ServicesSection;

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();
  
  // Clean color scheme
  const primary = '#cf3476'; // Telemagenta
  const secondary = '#fa8072'; // Salmon
  const white = '#ffffff';
  const darkBg = '#0a0a0a';

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  // Super smooth animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const slideIn = {
    hidden: { x: -30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      id: 1,
      title: 'AI Strategy',
      description: 'Custom AI roadmaps for business growth',
      icon: '⟡'
    },
    {
      id: 2,
      title: 'ML Development',
      description: 'Production-ready machine learning models',
      icon: '⏣'
    },
    {
      id: 3,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions',
      icon: '◉'
    },
    {
      id: 4,
      title: 'NLP Systems',
      description: 'Advanced language processing',
      icon: '◈'
    },
    {
      id: 5,
      title: 'AI Integration',
      description: 'Seamless system integration',
      icon: '⬡'
    },
    {
      id: 6,
      title: 'AI Consulting',
      description: 'Expert guidance and support',
      icon: '⬢'
    },
  ];

  return (
    <Box ref={ref} sx={{
      py: { xs: 8, md: 12 },
      backgroundColor: darkBg,
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Minimal background gradient - No heavy effects */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${primary}, ${secondary}, transparent)`,
          opacity: 0.3,
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${secondary}, ${primary}, transparent)`,
          opacity: 0.3,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <Box sx={{ mb: { xs: 6, md: 10 } }}>
            <motion.div variants={slideIn}>
              <Typography
                variant="h2"
                sx={{
                  color: white,
                  fontWeight: 300,
                  fontSize: { xs: '2rem', md: '3rem' },
                  letterSpacing: '-0.02em',
                  mb: 2,
                  '& span': {
                    fontWeight: 700,
                    color: primary,
                  }
                }}
              >
                AI Services
              </Typography>
            </motion.div>
            
            <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
              <Typography
                variant="body1"
                sx={{
                  color: '#aaa',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  maxWidth: '600px',
                  lineHeight: 1.6,
                }}
              >
                Expert artificial intelligence solutions tailored to your specific needs. 
                From strategy to implementation.
              </Typography>
            </motion.div>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <motion.div
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => handleServiceClick(service.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <Box
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        borderColor: primary,
                        transform: 'translateY(-8px)',
                        boxShadow: `0 20px 40px rgba(207, 52, 118, 0.1)`,
                        '& .service-icon': {
                          color: primary,
                          transform: 'scale(1.1)',
                        },
                        '& .service-title': {
                          color: primary,
                        },
                        '& .service-arrow': {
                          transform: 'translateX(4px)',
                        }
                      }
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="service-icon"
                      variants={scaleIn}
                      transition={{ delay: index * 0.05 }}
                      style={{
                        fontSize: '3rem',
                        color: secondary,
                        marginBottom: '1.5rem',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Title */}
                    <motion.div
                      className="service-title"
                      variants={fadeInUp}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: white,
                          fontWeight: 600,
                          fontSize: { xs: '1.2rem', md: '1.4rem' },
                          mb: 1.5,
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {service.title}
                      </Typography>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      variants={fadeInUp}
                      transition={{ delay: index * 0.05 + 0.2 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#888',
                          lineHeight: 1.6,
                          fontSize: '0.95rem',
                          mb: 3,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </motion.div>

                    {/* Arrow indicator */}
                    <motion.div
                      className="service-arrow"
                      variants={fadeInUp}
                      transition={{ delay: index * 0.05 + 0.3 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#666',
                          fontSize: '0.85rem',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          mr: 1,
                        }}
                      >
                        Explore
                      </Typography>
                      <ArrowRightAltIcon sx={{ 
                        fontSize: '1rem',
                        color: '#666',
                      }} />
                    </motion.div>

                    {/* Hover line effect */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '1px',
                        background: `linear-gradient(90deg, ${primary}, ${secondary})`,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease',
                      }}
                      className="hover-line"
                    />
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
            style={{ marginTop: '4rem', textAlign: 'center' }}
          >
            <IconButton
              onClick={() => navigate('/services')}
              sx={{
                p: 2,
                border: `1px solid ${primary}`,
                color: white,
                '&:hover': {
                  backgroundColor: primary,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 10px 30px ${primary}40`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowRightAltIcon sx={{ fontSize: '1.5rem' }} />
            </IconButton>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                color: '#666',
                mt: 2,
                fontSize: '0.9rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              View All Services
            </Typography>
          </motion.div>
        </motion.div>
      </Container>

      {/* Minimal decorative lines */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '200px',
          height: '200px',
          opacity: 0.05,
          zIndex: 0,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            background: primary,
          },
          '&::before': {
            top: 0,
            left: '50%',
            width: '1px',
            height: '100%',
            transform: 'translateX(-50%)',
          },
          '&::after': {
            top: '50%',
            left: 0,
            width: '100%',
            height: '1px',
            transform: 'translateY(-50%)',
          }
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          opacity: 0.05,
          zIndex: 0,
          border: `1px solid ${secondary}`,
          transform: 'rotate(45deg)',
        }}
      />
    </Box>
  );
};

export default ServicesSection;