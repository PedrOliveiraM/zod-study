import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './AgreementForm.schema';
import { z } from 'zod';

export default function AgreementForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) =>
    alert(JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
    >
      <label className="flex items-center gap-2">
        <input
          {...register('agreeToTerms')}
          type="checkbox"
          className="border p-2 rounded"
        />{' '}
        I agree to the terms
      </label>
      {errors.agreeToTerms && (
        <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
