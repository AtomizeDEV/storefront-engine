import { module, test } from 'qunit';
import { setupTest } from 'dummy/tests/helpers';

module('Unit | Transform | point', function (hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function (assert) {
        let transform = this.owner.lookup('transform:point');
        assert.ok(transform);
    });
});
