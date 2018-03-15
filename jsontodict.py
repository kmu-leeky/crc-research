import os,json


class JsonToDict():
	JSON_LIST = []
	DICT = []
	local_path = ""

	def get_JsonFiles(self, path):

		files_in_dir = os.listdir(path)
		self.local_path = path
		
		for a_file in files_in_dir:
			if a_file.upper().upper().find('.JSON') != -1:
				self.JSON_LIST.append(a_file)

	def read_Json(self,jsonfile):

		json_Path = os.path.join(self.local_path,jsonfile)
		#print(json_Path)

		r = open(json_Path)
		txt = r.read()
		r.close()

		"""
		return non-split{'\n'}
		"""
		return txt

	def convert_Dict(self,strJsons):

		strJsons = strJsons.split("\n")
		self.DICT = [] # dictionary re-initalize

		for str_json in strJsons:
			if str_json == "":
				break
			#print(json.loads(str_json))
			#dict type list.
			self.DICT.append(json.loads(str_json))


	def __init__(self):
		print("JsonParser import success")
		print("Follow Example to below")
		print("-----------------------")
		print("JP.get_Files('.') \
				for JSON in JP.JSON_LIST: \
				    json_data = JP.read_Json(JSON)\
					JP.convert_Dict(json_data)\
					fileName = JSON[:-5] + str('.csv')\
					csvcls.write_CSV('.',fileName,JP.DICT)\
		")

