import { Box, Card, CardContent, Chip, Container, Divider, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

import { format } from 'date-fns';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function CryptoNewsPage() {
  // Static crypto news data
  const newsArticles = [
    {
      id: 1,
      title: 'Bitcoin ETF Inflows Hit Record $1.2B in Single Day',
      summary:
        'Institutional investors poured over $1.2 billion into spot Bitcoin ETFs on Wednesday, marking the highest single-day inflow since launch.',
      category: 'Bitcoin',
      date: new Date('2025-11-13'),
      readTime: '3 min',
      trending: true,
    },
    {
      id: 2,
      title: 'Ethereum Shanghai Upgrade Successfully Activated',
      summary:
        'The long-awaited Shanghai upgrade has been successfully deployed on mainnet, enabling staked ETH withdrawals for the first time.',
      category: 'Ethereum',
      date: new Date('2025-11-12'),
      readTime: '5 min',
      trending: true,
    },
    {
      id: 3,
      title: 'Solana Outperforms Ethereum in Daily Active Users',
      summary:
        'Solana has surpassed Ethereum in daily active addresses for the third consecutive week, driven by meme coin frenzy and DeFi growth.',
      category: 'Solana',
      date: new Date('2025-11-11'),
      readTime: '4 min',
      trending: false,
    },
    {
      id: 4,
      title: 'Tether Mints $1 Billion USDT on Tron Network',
      summary:
        'Tether has issued another $1 billion in USDT on the Tron blockchain to replenish liquidity for market operations.',
      category: 'Stablecoins',
      date: new Date('2025-11-10'),
      readTime: '2 min',
      trending: false,
    },
    {
      id: 5,
      title: 'Ripple Wins Partial Victory in SEC Lawsuit',
      summary:
        'Federal judge rules that XRP sales on exchanges are not securities, delivering a major win for Ripple Labs.',
      category: 'XRP',
      date: new Date('2025-11-09'),
      readTime: '6 min',
      trending: true,
    },
    {
      id: 6,
      title: 'BlackRock Files for Ethereum ETF with Staking',
      summary:
        'The world’s largest asset manager has filed an S-1 for a spot Ethereum ETF that includes native staking yields.',
      category: 'Ethereum',
      date: new Date('2025-11-08'),
      readTime: '4 min',
      trending: true,
    },
  ];

  return (
    <>
      <Meta
        title="Crypto News Today"
        description="Latest cryptocurrency news, Bitcoin, Ethereum, Solana, and blockchain updates."
      />

      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
          color: '#fff',
          py: { xs: 4, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '4rem' },
                background: 'linear-gradient(90deg, #00ddeb, #8a2be2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Crypto News
            </Typography>
            <Typography variant="h6" color="gray.300" sx={{ opacity: 0.8 }}>
              Real-time updates from the blockchain universe
            </Typography>
          </Box>

          {/* News Grid */}
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {newsArticles.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} key={article.id}>
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                      borderColor: '#8a2be2',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    {/* Trending Badge */}
                    {article.trending && (
                      <Chip
                        label="Trending"
                        size="small"
                        sx={{
                          background: 'linear-gradient(45deg, #ff006e, #8338ec)',
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: '0.7rem',
                          height: 24,
                          mb: 1.5,
                        }}
                      />
                    )}

                    {/* Category & Date */}
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <Chip
                        label={article.category}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(139, 92, 246, 0.2)',
                          color: '#8b5cf6',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                        }}
                      />
                      <Typography variant="caption" color="gray.400">
                        {format(article.date, 'MMM d')} • {article.readTime}
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 1.5, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.4,
                        color: '#fff',
                      }}
                    >
                      {article.title}
                    </Typography>

                    {/* Summary */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'gray.300',
                        lineHeight: 1.6,
                        fontSize: { xs: '0.875rem', md: '0.95rem' },
                      }}
                    >
                      {article.summary}
                    </Typography>

                    {/* Read More */}
                    <Box mt={2}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#8a2be2',
                          fontWeight: 600,
                          '&:hover': { textDecoration: 'underline' },
                        }}
                      >
                        Read more →
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Footer CTA */}
          <Box textAlign="center" mt={8}>
            <Typography variant="body2" color="gray.400">
              Stay ahead in crypto. Bookmark for daily updates.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default CryptoNewsPage;
