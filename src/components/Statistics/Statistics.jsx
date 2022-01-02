import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatsList,
  StatItem,
} from './Statistics.styled';
export default function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}</span>
            </StatItem>
          );
        })}
      </StatsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};
