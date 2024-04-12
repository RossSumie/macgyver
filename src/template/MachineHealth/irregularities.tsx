import React from 'react';

import * as S from './styles';

const Irregularities = () => {
    return (
        <S.Container>
            <S.IrregularitiesContainer>
                <S.IrregularitiesItemContainer>
                    <h1
                        style={{
                            color: '#FCD12A',
                            fontSize: '16px',
                            fontFamily: 'Arial'
                        }}
                    >
                        Concern
                    </h1>
                    <S.Heading>Cooling System</S.Heading>
                    <S.SubHeading>
                        - Abnormal temperature rises without enviromental or
                        workload causes
                    </S.SubHeading>
                    <S.SubHeading>
                        -Initial inspection shows possible belt tightness
                        problems
                    </S.SubHeading>
                </S.IrregularitiesItemContainer>
                <S.IrregularitiesItemContainer>
                    <h1
                        style={{
                            color: 'red',
                            fontSize: '16px',
                            fontFamily: 'Arial'
                        }}
                    >
                        Fault
                    </h1>
                    <S.Heading>Air Conditioning</S.Heading>
                    <S.SubHeading>
                        - Operator reports and cabin sensors indicate the air
                        conditioning system is not working
                    </S.SubHeading>
                    <S.SubHeading>-No troubleshooting made</S.SubHeading>
                </S.IrregularitiesItemContainer>
                <S.IrregularitiesItemContainer>
                    <h1
                        style={{
                            color: '#FCD12A',
                            fontSize: '16px',
                            fontFamily: 'Arial'
                        }}
                    >
                        Concern
                    </h1>
                    <S.Heading>Abnormal Vibrations</S.Heading>
                    <S.SubHeading>
                        - Sensors and operator reports indicate possible
                        excessive vibrations during engine startup
                    </S.SubHeading>
                    <S.SubHeading>- Further inspection needed</S.SubHeading>
                </S.IrregularitiesItemContainer>
            </S.IrregularitiesContainer>
        </S.Container>
    );
};

export default Irregularities;
