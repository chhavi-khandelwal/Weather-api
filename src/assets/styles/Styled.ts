import styled from 'styled-components';

export const Styler = {
  FlexCol: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
  `,
  Flex: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  FlexSpace: styled.div<{ width?: string }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => props.width || '100%'};
  `,
};
