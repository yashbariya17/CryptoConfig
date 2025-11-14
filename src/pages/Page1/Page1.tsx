import React from 'react';

import { AccessTime, ArrowForward, CheckCircle, Pending } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import { format } from 'date-fns';
import { motion } from 'framer-motion';

import Meta from '@/components/Meta';

('use client');

function Page1() {
  // Static Invoice Data
  const invoices = [
    {
      id: 'INV-2025-001',
      client: 'Acme Corp',
      amount: 8450.0,
      dueDate: new Date('2025-03-15'),
      status: 'paid',
      token: 'USDC',
      txHash: '0xabc...123',
    },
    {
      id: 'INV-2025-002',
      client: 'Stark Industries',
      amount: 12300.0,
      dueDate: new Date('2025-04-01'),
      status: 'pending',
      token: 'ETH',
      txHash: '0xdef...456',
    },
    {
      id: 'INV-2025-003',
      client: 'Wayne Enterprises',
      amount: 5670.5,
      dueDate: new Date('2025-02-28'),
      status: 'paid',
      token: 'BTC',
      txHash: '0xghi...789',
    },
  ];

  // Static Recent Transactions
  const transactions = [
    {
      id: '52865157INT',
      date: new Date('2025-11-13'),
      from: '0x71C7...a1F3',
      to: '0x9Ba2...e8D4',
      amount: 1.35875,
      token: 'BTC',
      status: 'completed',
    },
    {
      id: '685377421YT',
      date: new Date('2025-11-12'),
      from: '0x4fE1...c9B2',
      to: '0x2dF5...7aC1',
      amount: 1828.16,
      token: 'USDT',
      status: 'pending',
    },
    {
      id: '773829104AB',
      date: new Date('2025-11-11'),
      from: '0x8aD3...f5E9',
      to: '0x1bC4...d6F7',
      amount: 2104.5,
      token: 'ETH',
      status: 'completed',
    },
    {
      id: '991234567CD',
      date: new Date('2025-11-10'),
      from: '0x6eF2...a3B8',
      to: '0x5cA1...b9D0',
      amount: 890.0,
      token: 'SOL',
      status: 'completed',
    },
  ];

  const getTokenColor = (token: string) => {
    const colors: Record<string, string> = {
      BTC: '#f7931a',
      ETH: '#62688f',
      USDT: '#26a17b',
      USDC: '#2775ca',
      SOL: '#14f195',
    };
    return colors[token] || '#8b5cf6';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle sx={{ fontSize: 18, color: '#10b981' }} />;
      case 'pending':
        return <Pending sx={{ fontSize: 18, color: '#f59e0b' }} />;
      default:
        return <AccessTime sx={{ fontSize: 18, color: '#94a3b8' }} />;
    }
  };

  return (
    <>
      <Meta
        title="Crypto Invoices & Transactions"
        description="Track invoices and recent blockchain transactions in real-time."
      />

      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
          py: { xs: 3, md: 5 },
          color: '#fff',
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                fontWeight: 800,
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                background: 'linear-gradient(90deg, #00ddeb, #8a2be2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              Invoices & Transactions
            </Typography>
            <Typography variant="h6" color="gray.400" textAlign="center" sx={{ opacity: 0.9 }}>
              Manage payments and track on-chain activity
            </Typography>
          </motion.div>

          <Grid container spacing={{ xs: 3, md: 4 }} mt={2}>
            {/* Invoices Section */}
            <Grid item xs={12} lg={7}>
              <Typography variant="h5" fontWeight={700} mb={3} color="#e2e8f0">
                Recent Invoices
              </Typography>

              <Stack spacing={3}>
                {invoices.map((invoice, index) => (
                  <motion.div
                    key={invoice.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 8 }}
                  >
                    <Card
                      sx={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: 3,
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: '#8a2be2',
                          boxShadow: '0 20px 40px rgba(138, 43, 226, 0.2)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Box>
                            <Typography variant="h6" fontWeight={600} color="#fff">
                              {invoice.id}
                            </Typography>
                            <Typography variant="body2" color="gray.300">
                              {invoice.client}
                            </Typography>
                          </Box>

                          <Box textAlign="right">
                            <Typography
                              variant="h5"
                              fontWeight={700}
                              color={getTokenColor(invoice.token)}
                            >
                              {invoice.amount.toLocaleString()} {invoice.token}
                            </Typography>
                            <Typography variant="caption" color="gray.400">
                              Due: {format(invoice.dueDate, 'MMM d, yyyy')}
                            </Typography>
                          </Box>
                        </Box>

                        <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Chip
                            icon={getStatusIcon(invoice.status)}
                            label={invoice.status.toUpperCase()}
                            size="small"
                            sx={{
                              background:
                                invoice.status === 'paid'
                                  ? 'rgba(16, 185, 129, 0.2)'
                                  : 'rgba(245, 158, 11, 0.2)',
                              color: invoice.status === 'paid' ? '#10b981' : '#f59e0b',
                              fontWeight: 600,
                            }}
                          />
                          <Button
                            endIcon={<ArrowForward />}
                            size="small"
                            sx={{
                              color: '#8a2be2',
                              fontWeight: 600,
                              textTransform: 'none',
                            }}
                          >
                            View TX
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Stack>
            </Grid>

            {/* Recent Transactions */}
            <Grid item xs={12} lg={5}>
              <Typography variant="h5" fontWeight={700} mb={3} color="#e2e8f0">
                Recent Transactions
              </Typography>

              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  {transactions.map((tx, index) => (
                    <motion.div
                      key={tx.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Box
                        sx={{
                          p: 3,
                          borderBottom:
                            index < transactions.length - 1
                              ? '1px solid rgba(255, 255, 255, 0.1)'
                              : 'none',
                          '&:hover': {
                            background: 'rgba(138, 43, 226, 0.1)',
                            cursor: 'pointer',
                          },
                        }}
                      >
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Box display="flex" alignItems="center" gap={2}>
                            <Avatar
                              sx={{
                                width: 36,
                                height: 36,
                                bgcolor: getTokenColor(tx.token),
                                fontSize: '0.8rem',
                                fontWeight: 700,
                              }}
                            >
                              {tx.token}
                            </Avatar>
                            <Box>
                              <Typography variant="body1" fontWeight={600} color="#fff">
                                {tx.amount.toLocaleString()} {tx.token}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="gray.400"
                                sx={{
                                  fontFamily: 'monospace',
                                  fontSize: '0.7rem',
                                }}
                              >
                                {tx.from} → {tx.to}
                              </Typography>
                            </Box>
                          </Box>

                          <Box textAlign="right">
                            {getStatusIcon(tx.status)}
                            <Typography variant="caption" color="gray.400" display="block" mt={0.5}>
                              {format(tx.date, 'MMM d')}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* CTA Footer */}
          <Box textAlign="center" mt={8}>
            <Typography variant="body2" color="gray.400">
              Powered by blockchain • Updated {format(new Date(), 'PPpp')}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Page1;
