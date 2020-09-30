import { NextPageContext } from 'next';
import * as React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { RootState } from 'typesafe-actions';

import Layout from '../components/layout/layout';
import DatasetHeader from '../components/dataset/header';
import AboutDataset from '../components/dataset/about';

import makeSSRDispatch from '../utilities/ssr-request';
import {
    fetchTotalClips,
    fetchTotalClipsClients,
    fetchTotalValidatedClips
} from '../store/stats/actions';

const DatasetPageContainer = styled.div`
    max-width: ${({ theme }) => theme.layout.desktopWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 -1.5rem;
    overflow: visible;
`;

interface DatasetPageProps {

}

type Props = DatasetPageProps & ReturnType<typeof mapStateToProps>;

class DatasetPage extends React.Component<Props> {

    static getInitialProps = async (ctx: NextPageContext) => {

        await makeSSRDispatch(ctx, fetchTotalClips.request);
        await makeSSRDispatch(ctx, fetchTotalClipsClients.request);
        await makeSSRDispatch(ctx, fetchTotalValidatedClips.request);

        return ({
            namespacesRequired: ['common'],
        });
    }

    render() {
        const { stats } = this.props;
        return (
            <Layout>
                <DatasetPageContainer>
                    <HeaderContainer>
                        <DatasetHeader />
                    </HeaderContainer>
                    <AboutDataset
                        clips={stats.totalClips}
                        clients={stats.totalClipsClients}
                        validated={stats.totalValidatedClips}
                    />
                </DatasetPageContainer>
            </Layout>
        );
    }
}


const mapStateToProps = (state: RootState) => ({
    stats: state.stats,
});

export default connect(
    mapStateToProps
)(DatasetPage);