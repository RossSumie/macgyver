import React from 'react';
import CircularWithValueLabel from 'components/ProgressCircle';

import * as S from './styles';

const SystemsHealth = () => {
    return (
        <S.Container>
            <S.Heading>Machine Health Status</S.Heading>
            <S.GraphContainer>
                <CircularWithValueLabel value={71} />{' '}
                <S.GraphSubtitle>General Health</S.GraphSubtitle>
            </S.GraphContainer>
            <S.TableContainer>
                <S.TableCell>
                    <S.SubHeading>Track</S.SubHeading>
                </S.TableCell>
                <S.TableCell>
                    <S.SubHeading>95%</S.SubHeading>
                </S.TableCell>
                <S.TableCell>
                    <S.SubHeading>Hydraulics</S.SubHeading>
                </S.TableCell>
                <S.TableCell>
                    <S.SubHeading>90%</S.SubHeading>
                </S.TableCell>
                <S.TableCell>
                    <S.SubHeading>Engine</S.SubHeading>
                </S.TableCell>
                <S.TableCell>
                    <S.SubHeading>61%</S.SubHeading>
                </S.TableCell>
                <S.TableCell>
                    <S.SubHeading>Cooling</S.SubHeading>
                </S.TableCell>
                <S.TableCell>
                    <S.SubHeading>76%</S.SubHeading>
                </S.TableCell>
                <S.TableCell>
                    <S.SubHeading>Electrical</S.SubHeading>
                </S.TableCell>
                <S.TableCell>
                    <S.SubHeading>80%</S.SubHeading>
                </S.TableCell>
            </S.TableContainer>
        </S.Container>
    );
};

export default SystemsHealth;
