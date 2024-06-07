<template>
	<div class="container mt-[50px] md:mt-[128px]">
		<div class="md:pt-[48px] border">
			<h2
				class="font-bold text-[30px] md:text-[48px] leading-[64px] text-center pt-[48px]"
			>
				Contact Us
			</h2>
			<p
				class="text-[16px] leading-7 font-normal mt-[10px] md:mt-[16px] max-w-[400px] md:max-w-[500px] mx-auto text-center mb-[30px] md:mb-[64px]"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore.
			</p>
			<div>
				<form
					class="md:w-[1061px] border pb-[50px] md:pb-[128px] mx-auto bg-[#F4F6FC]"
				>
					<div class="w-full">
						<div
							class="grid md:grid-cols-2 gap-5 border px-[30px] md:px-[77px] pt-[55px]"
						>
							<div>
								<label class="text-[#000000] display: block font-medium"
									>Name</label
								>
								<input
									type="text"
									class="border w-full py-3 ring-0 border-black/[.12] outline-none focus:border-gray-50 focus:shadow-outline px-5 rounded-xl"
									placeholder="Enter your Name"
									required
								/>
							</div>
							<div>
								<label class="text-[#000000] display: block font-medium"
									>Email</label
								>
								<input
									type="text"
									class="border w-full py-3 ring-0 border-black/[.12] outline-none focus:border-gray-50 focus:shadow-outline px-5 rounded-xl"
									placeholder="Enter your name"
									required
								/>
							</div>
							<div>
								<label class="text-[#000000] display: block font-medium"
									>Subject</label
								>
								<input
									type="text"
									class="border w-full py-3 ring-0 border-black/[.12] outline-none focus:border-gray-50 focus:shadow-outline px-5 rounded-xl"
									placeholder="Provide context"
									required
								/>
							</div>
							<div>
								<label class="text-[#000000] display: block font-medium"
									>Subject</label
								>
								<input
									type="text"
									class="border w-full py-3 ring-0 border-black/[.12] outline-none focus:border-gray-50 focus:shadow-outline px-5 rounded-xl"
									placeholder="Provide context"
									required
								/>
							</div>
						</div>

						<div class="px-[30px] md:px-[77px] mt-5">
							<label class="text-[#000000] display: block mb-3 font-medium"
								>Message</label
							>
							<textarea
								class="border mb-[32px] resize-none w-full py-4 h-[180px] rounded-md ring-0 border-black/[.12] outline-none focus:border-gray-50 focus:shadow-outline"
								placeholder="Write your  question here"
							></textarea>
							<div class="max-md:flex justify-center">
								<button
									class="border bg-[#282938] text-[white] py-3 ring-0 px-[50px] rounded-3xl"
								>
									Send Message
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
