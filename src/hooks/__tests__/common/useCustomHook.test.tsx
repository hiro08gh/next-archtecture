import { renderHook } from '@testing-library/react-hooks';
import { useCustomHook } from '../../common/useCustomHook';
import { wrapper } from '../ReactQueryClient';

describe('useCustomHook.ts', () => {
  it('Helloの値を返す', async () => {
    const { result, waitFor } = renderHook(() => useCustomHook(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual('Hello');
  });
});
