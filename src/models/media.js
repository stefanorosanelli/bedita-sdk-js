import { ObjectModel } from './object.js';
import { RELATIONSHIP_MODES } from '../collections/relationships.js';

const SCHEMA = {
    type: 'object',
    definitions: ObjectModel.schema.definitions,
    allOf: [
        { $ref: '#/definitions/object' },
        {
            type: 'object',
            properties: {
                name: {
                    oneOf: [
                        { type: 'null' },
                        { type: 'string', maximum: 255 },
                    ],
                },
                width: {
                    oneOf: [
                        { type: 'null' },
                        { type: 'number' },
                    ],
                },
                height: {
                    oneOf: [
                        { type: 'null' },
                        { type: 'number' },
                    ],
                },
                duration: {
                    oneOf: [
                        { type: 'null' },
                        { type: 'number' },
                    ],
                },
                metadata: { $ref: '#/definitions/metadata' },
            },
        },
    ],
};

export class MediaModel extends ObjectModel {
    static get schema() {
        return SCHEMA;
    }

    static get relationships() {
        return {
            streams: {
                types: ['streams'],
                mode: RELATIONSHIP_MODES.ONE_TO_ONE,
                inverse: 'object',
            },
        };
    }

    get type() {
        return 'media';
    }
}
