import React from 'react';
import QuestionnaireHeader from 'components/QuestionnaireHeader';
import CircularWithValueLabel from 'components/ProgressCircle';
import StatusCircle from 'components/StatusCircle';
import Router from 'next/router';
import * as S from './styles';

const ReportTemplate = () => {
    const value = 86; // Example value, you can replace it with the actual value

    let subtitle;
    if (value > 80) {
        subtitle = 'Good!';
    } else if (value > 60) {
        subtitle = 'Caution!';
    } else {
        subtitle = 'Danger';
    }

    return (
        <S.Wrapper>
            <QuestionnaireHeader
                previousPage="/CheckUp/PageTwo"
                nextPage="/Home"
            />
            <S.Container>
                <S.Heading>General Report</S.Heading>
                <S.Information>
                    <S.InformationColumn>
                        <S.SubHeading>Machine Type : EC210D</S.SubHeading>
                        <S.SubHeading>
                            Operator : Arthur Paparounis
                        </S.SubHeading>
                    </S.InformationColumn>
                    <S.InformationColumn>
                        <S.SubHeading>Machine Number : 11341186</S.SubHeading>
                        <S.SubHeading>Date: 10/04/24</S.SubHeading>
                    </S.InformationColumn>
                </S.Information>
                <S.GraphContainer>
                    <CircularWithValueLabel value={value} />
                    <S.GraphSubtitle>{subtitle}</S.GraphSubtitle>
                </S.GraphContainer>
                <S.TableContainer>
                    <S.TableCell>
                        <S.SubHeading>Track</S.SubHeading>
                    </S.TableCell>
                    <S.TableCell>
                        <StatusCircle color="green" />
                        <S.SubHeading>OK</S.SubHeading>
                    </S.TableCell>
                    <S.TableCell>
                        <S.SubHeading>Engine</S.SubHeading>
                    </S.TableCell>
                    <S.TableCell>
                        <StatusCircle color="yellow" />
                        <S.SubHeading>Needs Adjustment</S.SubHeading>
                    </S.TableCell>
                    <S.TableCell>
                        <S.SubHeading>Cooling System</S.SubHeading>
                    </S.TableCell>
                    <S.TableCell>
                        <StatusCircle color="red" />
                        <S.SubHeading>Need Repair</S.SubHeading>
                    </S.TableCell>
                </S.TableContainer>
                <S.ImagesContainer>
                    <S.Heading2>Images</S.Heading2>
                    <S.Images>
                        <img
                            src="/assets/EC210D.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'calc(100% - 8px)'
                            }} // Adjust the width and height to fit the grid cell with padding
                            alt="logo"
                        />
                        <img
                            src="/assets/EC210D.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'calc(100% - 8px)'
                            }} // Adjust the width and height to fit the grid cell with padding
                            alt="logo"
                        />
                        <img
                            src="/assets/EC210D.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'calc(100% - 8px)'
                            }} // Adjust the width and height to fit the grid cell with padding
                            alt="logo"
                        />
                        <img
                            src="/assets/EC210D.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'calc(100% - 8px)'
                            }} // Adjust the width and height to fit the grid cell with padding
                            alt="logo"
                        />
                        <img
                            src="/assets/EC210D.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'calc(100% - 8px)'
                            }} // Adjust the width and height to fit the grid cell with padding
                            alt="logo"
                        />
                        <img
                            src="/assets/EC210D.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'calc(100% - 8px)'
                            }} // Adjust the width and height to fit the grid cell with padding
                            alt="logo"
                        />
                        <img
                            src="/assets/EC210D.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'calc(100% - 8px)'
                            }} // Adjust the width and height to fit the grid cell with padding
                            alt="logo"
                        />
                        <img
                            src="/assets/EC210D.jpg"
                            style={{
                                width: 'calc(100% - 8px)',
                                height: 'calc(100% - 8px)'
                            }} // Adjust the width and height to fit the grid cell with padding
                            alt="logo"
                        />
                    </S.Images>
                </S.ImagesContainer>
                <S.Button onClick={() => Router.push('/Home')}>
                    <S.ButtonText>Back to Menu</S.ButtonText>
                </S.Button>
            </S.Container>
        </S.Wrapper>
    );
};

export default ReportTemplate;
