import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

import { format } from 'date-fns';
import { motion } from 'framer-motion';

import Meta from '@/components/Meta';

('use client');

// Inline crypto math utilities (you can extract later)
function calculateAPY(principal: number, interest: number, compounds: number): number {
  return ((1 + interest / principal / compounds) ** compounds - 1) * 100;
}

function calculateROI(entry: number, exit: number, investment: number): number {
  return ((exit - entry) * investment) / entry;
}

function calculateImpermanentLoss(priceRatio: number): number {
  return ((2 * Math.sqrt(priceRatio)) / (1 + priceRatio) - 1) * 100;
}

function calculateFutureValue(
  principal: number,
  rate: number,
  time: number,
  compounds: number,
): number {
  return principal * Math.pow(1 + rate / compounds, compounds * time);
}

export default function Page3() {
  // State for calculators
  const [roiEntry, setRoiEntry] = useState(30000);
  const [roiExit, setRoiExit] = useState(65000);
  const [roiInvest, setRoiInvest] = useState(1);

  const [apyPrincipal, setApyPrincipal] = useState(1000);
  const [apyInterest, setApyInterest] = useState(150);
  const [apyCompounds, setApyCompounds] = useState(365);

  const [ilRatio, setIlRatio] = useState(3);

  const [fvPrincipal, setFvPrincipal] = useState(5000);
  const [fvRate, setFvRate] = useState(0.8);
  const [fvTime, setFvTime] = useState(1);
  const [fvCompounds, setFvCompounds] = useState(12);

  // Animated particles
  const particles = Array.from({ length: 50 });

  return (
    <>
      <Meta
        title="Crypto Calc Lab"
        description="Interactive crypto calculators: ROI, APY, Impermanent Loss, Future Value with live formulas."
      />

      {/* Animated Particle Background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: -1,
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        }}
      >
        {particles.map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, x: Math.random() * window.innerWidth }}
            animate={{
              y: window.innerHeight + 20,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
            style={{
              position: 'absolute',
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              background: i % 3 === 0 ? '#00ddeb' : i % 2 === 0 ? '#8a2be2' : '#ff006e',
              borderRadius: '50%',
              opacity: 0.6,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, position: 'relative' }}>
        {/* Hero Header */}
        <Box textAlign="center" mb={6}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                fontWeight: 900,
                background: 'linear-gradient(90deg, #00ddeb, #8a2be2, #ff006e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                textShadow: '0 0 30px rgba(138, 43, 226, 0.5)',
              }}
            >
              Crypto Calc Lab
            </Typography>
            <Typography variant="h5" color="gray.300" sx={{ opacity: 0.9 }}>
              Master DeFi math with live formulas & instant results
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* ROI Calculator */}
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 3,
                  p: 3,
                  height: '100%',
                  color: '#fff',
                }}
              >
                <Chip label="ROI" color="primary" sx={{ mb: 2, fontWeight: 'bold' }} />
                <Typography variant="h6" gutterBottom>
                  Return on Investment
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="Entry Price"
                      type="number"
                      value={roiEntry}
                      onChange={(e) => setRoiEntry(Number(e.target.value))}
                      fullWidth
                      variant="outlined"
                      size="small"
                      sx={{ input: { color: '#fff' }, label: { color: 'gray.400' } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="Exit Price"
                      type="number"
                      value={roiExit}
                      onChange={(e) => setRoiExit(Number(e.target.value))}
                      fullWidth
                      variant="outlined"
                      size="small"
                      sx={{ input: { color: '#fff' }, label: { color: 'gray.400' } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="BTC Amount"
                      type="number"
                      value={roiInvest}
                      onChange={(e) => setRoiInvest(Number(e.target.value))}
                      fullWidth
                      variant="outlined"
                      size="small"
                      sx={{ input: { color: '#fff' }, label: { color: 'gray.400' } }}
                    />
                  </Grid>
                </Grid>

                <Box mt={3} p={2} bgcolor="rgba(139, 92, 246, 0.2)" borderRadius={2}>
                  <Typography variant="body2" color="gray.300" gutterBottom>
                    Formula:{' '}
                    <code style={{ color: '#8a2be2' }}>(exit - entry) × amount / entry</code>
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="#00ddeb">
                    Profit: ${calculateROI(roiEntry, roiExit, roiInvest).toFixed(2)}
                  </Typography>
                  <Typography
                    variant="body1"
                    color={calculateROI(roiEntry, roiExit, roiInvest) > 0 ? '#00ff9d' : '#ff006e'}
                  >
                    {((roiExit / roiEntry - 1) * 100).toFixed(2)}% ROI
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* APY Calculator */}
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 3,
                  p: 3,
                  height: '100%',
                  color: '#fff',
                }}
              >
                <Chip label="APY" color="secondary" sx={{ mb: 2, fontWeight: 'bold' }} />
                <Typography variant="h6" gutterBottom>
                  Compound Interest (APY)
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="Principal"
                      type="number"
                      value={apyPrincipal}
                      onChange={(e) => setApyPrincipal(Number(e.target.value))}
                      fullWidth
                      size="small"
                      sx={{ input: { color: '#fff' }, label: { color: 'gray.400' } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="Yearly Interest"
                      type="number"
                      value={apyInterest}
                      onChange={(e) => setApyInterest(Number(e.target.value))}
                      fullWidth
                      size="small"
                      sx={{ input: { color: '#fff' }, label: { color: 'gray.400' } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="Compounds/Year"
                      type="number"
                      value={apyCompounds}
                      onChange={(e) => setApyCompounds(Number(e.target.value))}
                      fullWidth
                      size="small"
                      sx={{ input: { color: '#fff' }, label: { color: 'gray.400' } }}
                    />
                  </Grid>
                </Grid>

                <Box mt={3} p={2} bgcolor="rgba(0, 221, 235, 0.2)" borderRadius={2}>
                  <Typography variant="body2" color="gray.300" gutterBottom>
                    Formula: <code style={{ color: '#00ddeb' }}>(1 + r/n)^(nt) - 1</code>
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="#00ff9d">
                    APY: {calculateAPY(apyPrincipal, apyInterest, apyCompounds).toFixed(2)}%
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Impermanent Loss */}
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 3,
                  p: 3,
                  height: '100%',
                  color: '#fff',
                }}
              >
                <Chip label="IL" color="error" sx={{ mb: 2, fontWeight: 'bold' }} />
                <Typography variant="h6" gutterBottom>
                  Impermanent Loss (LP)
                </Typography>

                <TextField
                  label="Price Change Ratio (e.g. 3 = 3x)"
                  type="number"
                  value={ilRatio}
                  onChange={(e) => setIlRatio(Number(e.target.value))}
                  fullWidth
                  size="small"
                  sx={{ mb: 2, input: { color: '#fff' }, label: { color: 'gray.400' } }}
                />

                <Box p={2} bgcolor="rgba(255, 0, 110, 0.2)" borderRadius={2}>
                  <Typography variant="body2" color="gray.300" gutterBottom>
                    Formula: <code style={{ color: '#ff006e' }}>2√k/(1+k) - 1</code>
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="#ff006e">
                    IL: {calculateImpermanentLoss(ilRatio).toFixed(2)}%
                  </Typography>
                  <Typography variant="body2" color="gray.300">
                    {ilRatio}x price change →{' '}
                    {calculateImpermanentLoss(ilRatio) < 0 ? 'Loss' : 'Gain'}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Future Value */}
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 3,
                  p: 3,
                  height: '100%',
                  color: '#fff',
                }}
              >
                <Chip label="FV" color="success" sx={{ mb: 2, fontWeight: 'bold' }} />
                <Typography variant="h6" gutterBottom>
                  Future Value (Staking)
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Principal"
                      type="number"
                      value={fvPrincipal}
                      onChange={(e) => setFvPrincipal(Number(e.target.value))}
                      fullWidth
                      size="small"
                      sx={{ input: { color: '#fff' }, label: { color: 'gray.400' } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="APY %"
                      type="number"
                      value={fvRate * 100}
                      onChange={(e) => setFvRate(Number(e.target.value) / 100)}
                      fullWidth
                      size="small"
                      sx={{ input: { color: '#fff' }, label: { color: 'gray.400' } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Years"
                      type="number"
                      value={fvTime}
                      onChange={(e) => setFvTime(Number(e.target.value))}
                      fullWidth
                      size="small"
                      sx={{ input: { color: '#fff' }, label: { color: 'gray.400' } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Compounds"
                      type="number"
                      value={fvCompounds}
                      onChange={(e) => setFvCompounds(Number(e.target.value))}
                      fullWidth
                      size="small"
                      sx={{ input: { color: '#fff' }, label: { color: 'gray.400' } }}
                    />
                  </Grid>
                </Grid>

                <Box mt={3} p={2} bgcolor="rgba(0, 255, 157, 0.2)" borderRadius={2}>
                  <Typography variant="body2" color="gray.300" gutterBottom>
                    Formula: <code style={{ color: '#00ff9d' }}>P × (1 + r/n)^(nt)</code>
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" color="#00ff9d">
                    ${calculateFutureValue(fvPrincipal, fvRate, fvTime, fvCompounds).toFixed(2)}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box textAlign="center" mt={8}>
          <Typography variant="body2" color="gray.400">
            Built with <span style={{ color: '#8a2be2' }}>♥</span> for crypto degens. Data updates:{' '}
            {format(new Date(), 'PPpp')}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
