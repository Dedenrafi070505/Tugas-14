import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #00b4db, #00d08e); /* gradasi biru ke hijau */
  color: #f1f5f9; /* text-light */
  border-radius: 1.5rem;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
`;

export const HeroLeft = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const HeroRight = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const HeroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #ffffff; /* putih agar kontras dengan bg gradasi */
`;

export const HeroGenre = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #d1fae5; /* hijau mint terang */
  margin-bottom: 1rem;
`;

export const HeroDescription = styled.p`
  font-size: 1rem;
  color: #e0f2fe; /* biru muda terang */
  line-height: 1.75;
  margin-bottom: 1.5rem;
`;

export const HeroButton = styled.button`
  background: linear-gradient(to right, #3b82f6, #00d08e); /* biru ke hijau */
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #2563eb, #00b894); /* lebih gelap saat hover */
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 208, 142, 0.3);
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

export const StyledHero = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;

  .hero__left {
    flex: 1;
  }

  img {
    flex: 1;
    border-radius: 1rem;
    width: 100%;
    object-fit: cover;
  }
`;
