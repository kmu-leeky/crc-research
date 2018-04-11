import jsontodict,csvmodule

csvcls = csvmodule.CSVmodule()
JP = jsontodict.JsonToDict()

if __name__=="__main__":
	 JP.get_JsonFiles('.')
	 for JSON in JP.JSON_LIST:
	 	json_data = JP.read_Json(JSON)
	 	JP.convert_Dict(json_data)
	 	fileName = JSON[:-5] + str(".csv")
	 	csvcls.write_CSV('.',fileName,JP.DICT)

	 	