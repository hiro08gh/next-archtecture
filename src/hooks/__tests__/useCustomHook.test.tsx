import { renderHook } from '@testing-library/react-hooks';
import { useCustomHook } from '../useCustomHook';
import { wrapper } from './ReactQueryClient';

describe('useCustomHook.ts', () => {
  it('return Hello', async () => {
    const { result, waitFor } = renderHook(() => useCustomHook(), { wrapper });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual('Hello');
  });
});
