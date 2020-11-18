import React from 'react'
import { connect } from 'frontity'
import { Image } from 'react-bootstrap';

const Thumbnal = ({ state, id, classAdd }) => {
    const data = state.source.get(state.router.link);
    const media = state.source.attachment[id];

    if (!media) return;
    
    return data.isReady ? (
        <Image className={classAdd} component="img" src={media.source_url} alt={media.title.rendered} width="100%" />
    ) : <h2 className="align-content-center"> Loading... </h2>
}
export default connect(Thumbnal);