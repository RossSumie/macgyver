import React from 'react';

import TeamCommentButton from 'components/Buttons/TeamCommentsButton';
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
                            fontFamily: 'DM Sans'
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
                            fontFamily: 'DM Sans'
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
                            fontFamily: 'DM Sans'
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
                <S.IrregularitiesItemContainer>
                    <S.HeadingContainer>
                        <h1
                            style={{
                                fontSize: '20px',
                                fontFamily: 'DM Sans'
                            }}
                        >
                            Analyzed images
                        </h1>
                        <TeamCommentButton
                            title="AI analyzed images"
                            content="Here, the user should be able to view the images that they previously uploaded during Daily Checkups and Inspections along with the assessments made by the VolvoHS image analysis AI."
                        />
                    </S.HeadingContainer>
                    <S.Images>
                        <img
                            src="/assets/motor.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto'
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/vara.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto'
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/roda.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto'
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/motorverde.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto'
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/escava.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'auto'
                            }}
                            alt="logo"
                        />
                    </S.Images>
                </S.IrregularitiesItemContainer>
            </S.IrregularitiesContainer>
        </S.Container>
    );
};

export default Irregularities;
