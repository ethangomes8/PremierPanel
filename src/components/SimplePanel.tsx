import React from 'react';
import { PanelProps } from '@grafana/data';

interface Props extends PanelProps {}

export const SimplePanel: React.FC<Props> = () => {
  return (
    <div style={{ padding: '20px', fontSize: '20px', textAlign: 'center' }}>
      Premier plugin Grafana ! 
    </div>
  );
};
